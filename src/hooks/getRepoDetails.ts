import { Octokit } from 'octokit';
const octokit = new Octokit({ })

export async function getRepoDetails(repoName : string) {
    try {
        const img : any = await octokit.request('GET /repos/{owner}/{repo}/contents/assets/{path}', {
            owner: 'ameya-g-git',
            repo: repoName,
            path: 'banner.png'
        }).then(res => { return res.data.download_url
        }).catch(err => { console.log(err); return null})
        
        const languages : any = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: 'ameya-g-git',
            repo: repoName
        }).then(res => {return Object.keys(res.data).map( (item : string) => item.toLowerCase()).sort()
        }).catch(err => {console.log(err); return null})

        const description : any = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'ameya-g-git',
            repo: repoName
        }).then(res => {return res.data.description
        }).catch(err => {console.log(err); return null})

        return (
            {
                name: repoName,
                img: img ? img : null,
                description: description ? description : null,
                languages: languages ? languages : null,
            }
        );
    } catch (error) {
        console.error(`Error fetching details for repository ${repoName}:`, error);
        return null;
    }
}