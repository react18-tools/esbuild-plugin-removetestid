import { Plugin } from "esbuild";
import fs from "node:fs";

const removeTestidPlugin: () => Plugin = () => ({
	name: "esbuild-plugin-removetestid",
	setup(build) {
		build.onLoad({ filter: /.*\.tsx$/ }, args => {
			const text = fs.readFileSync(args.path, "utf8");
			return { contents: text.replace(/\s*data-testid="[^"]*"/gm, " "), loader: "tsx" };
		});
	},
});

export = removeTestidPlugin;
