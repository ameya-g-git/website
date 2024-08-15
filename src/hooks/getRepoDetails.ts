import { Octokit } from "octokit";
const octokit = new Octokit({});

export async function getRepoDetails(repoName: string) {
	const img: string = await octokit
		.request("GET /repos/{owner}/{repo}/contents/assets/{path}", {
			owner: "ameya-g-git",
			repo: repoName,
			path: "image.png",
		})
		.then((res) => {
			return res.data.download_url;
		})
		.catch((e) => {
			console.error(`Error fetching image for repository ${repoName}:`, e); 
            return "";
		});

	const description: string = await octokit
		.request("GET /repos/{owner}/{repo}", {
			owner: "ameya-g-git",
			repo: repoName,
		})
		.then((res) => {
			return res.data.description ? res.data.description : "";
		})
		.catch((e) => {
			console.error(`Error fetching desc. for repository ${repoName}:`, e);
			return "";
		});

	const languages: string[] = await octokit
		.request("GET /repos/{owner}/{repo}/languages", {
			owner: "ameya-g-git",
			repo: repoName,
		})
		.then((res) => {
			return Object.keys(res.data)
				.map((item: string) => item.toLowerCase())
				.sort();
		})
		.catch((e) => {
			console.error(`Error fetching languages for repository ${repoName}:`, e);
			return [];
		});

	return {
		name: repoName,
		url: `https://github.com/ameya-g-git/${repoName}`,
		img: img,
		description: description,
		languages: languages,
	};
}
