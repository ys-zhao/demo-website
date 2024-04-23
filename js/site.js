$(document).ready(function() {
    site.init()
});

const site = {
    init: function() {
        $("#btn-logout").hide();

        $("#btn-login").click(onBtnLoginClick);
        $("#btn-logout").click(onBtnLogoutClick);
    },

    onBtnLoginClick: async function () {

        const count = await getUserCount();
        alert(`Total users: ${count}`)

        if (count > 2) {
            alert("User count exceeds limit")
            return
        }
        await incUserCount();
        // update ui
        $("#btn-logout").show();
        $("#btn-login").hide();
    },

    onBtnLogoutClick: async function() {
        decUserCount();
        // update ui
        $("#btn-logout").hide();
        $("#btn-login").show();
    },

    getUserCount: async function () {
        const res = await service.loadJsonFile("users.json")
        return res.total
    },

    incUserCount: async function (user) {
        const res = await service.loadJsonFile("users.json")
        res.total++;
        await service.saveJsonFile("users.json", res)
    },

    decUserCount: async function (user) {
        const res = await service.loadJsonFile("users.json")
        if (res.count > 0){
            res.total--;
            await service.saveJsonFile("users.json", res)
        }
    }
}
