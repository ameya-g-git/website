import { Octokit } from 'octokit';
const octokit = new Octokit({ })

export async function getRepoDetails(repoName : string) {
    let img : string | null;
    let description : string | null;
    let languages : string[] | null;

    try {
        img = await octokit.request('GET /repos/{owner}/{repo}/contents/assets/{path}', {
            owner: 'ameya-g-git',
            repo: repoName,
            path: 'image.png'
        }).then(res => { return res.data.download_url})
    } catch (error) {
        console.error(`Error fetching image for repository ${repoName}:`, error);
        img = ""
    }

    try {
        description = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'ameya-g-git',
            repo: repoName
        }).then(res => {return res.data.description})
    } catch (error) {
        console.error(`Error fetching desc. for repository ${repoName}:`, error);
        description = ""
    }

    try {
        languages = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: 'ameya-g-git',
            repo: repoName
        }).then(res => {return Object.keys(res.data).map( (item : string) => item.toLowerCase()).sort()})
    } catch (error) {
        console.error(`Error fetching languages for repository ${repoName}:`, error);
        languages = []
    }

    return (
        {
            name: repoName,
            img: img,
            description: description ? description : null,
            languages: languages,
        }
    );
}