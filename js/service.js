var service={
    _owner: "ys-zhao",
    _repo: "demo-website",

    login: function() {

    },
    logout: function() {

    },

    loadJsonFile: async(file) => {
        const url = `https://api.github.com/repos/${_owner}/${_repo}/contents/${file}`;
        const res = await fetch(url, {
            headers: {                 
                'Accept': 'application/vnd.github.v3+json'               
            }
        });
        const data = await res.json();
        return data;
    },

    saveJsonFile: async(file, data, sha) => {
        const url = `https://api.github.com/repos/${_owner}/${_repo}/contents/${file}`;
        data = Buffer.from(JSON.stringify(data)).toString('base64');

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                message: 'Update JSON file',
                content: contentEncoded,
                sha: sha
            })
        });
        data = await res.json();
        return data;
    }
}