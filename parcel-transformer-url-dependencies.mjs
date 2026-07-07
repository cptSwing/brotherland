import { Transformer } from "@parcel/plugin";
import { parser } from "posthtml-parser";
import { render } from "posthtml-render";
import PostHTML from "posthtml";

/* HTML tag-name, attribute-name */
const config = {
    "audio-player": ["source"],
};

const transformerAudioPlayer = new Transformer({
    canReuseAST({ ast }) {
        return ast.type === "posthtml";
    },

    async parse({ asset }) {
        return {
            type: "posthtml",
            version: "0.16.6",
            program: parser(await asset.getCode(), {
                lowerCaseAttributeNames: true,
            }),
        };
    },

    async transform({ asset }) {
        const code = await asset.getCode();

        const result = await PostHTML([
            (tree) => {
                tree.walk((node) => {
                    if (Object.keys(config).includes(node.tag) && node.attrs) {
                        config[node.tag].forEach((attrName) => {
                            const nodeAttribute = node.attrs[attrName];

                            if (nodeAttribute) {
                                node.attrs[attrName] = asset.addURLDependency(nodeAttribute, {
                                    specifierType: "url",
                                });
                            }
                        });
                    }

                    return node;
                });
            },
        ]).process(code);

        asset.setCode(result.html);

        return [asset];
    },

    async generate({ ast }) {
        return {
            content: render(ast.program),
        };
    },
});

export default transformerAudioPlayer;
