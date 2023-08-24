import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: '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'
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

    const titleAndAuthor = result.data.map(issue => ({
        title: issue.title,
        authorID: issue.user.id
      }));
  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}