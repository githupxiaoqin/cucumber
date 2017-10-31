// .\node_modules\.bin\cucumber.js.cmd 
// .\node_modules\.bin\cucumber.js.cmd -t @......


let { defineSupportCode } = require('cucumber');
let assert = require('assert');


defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到注册页面', function () {
        this.driver.get("http://118.31.19.120:3000");
        this.driver.manage().window().maximize()
        this.driver.findElement({ xpath: "/html/body/div[1]/div/div/ul/li[5]/a" }).click();
    })

    When('在注册用户信息中填入注册信息', function () {
        this.driver.findElement({ id: "loginname" }).sendKeys("xiaoming");
        this.driver.findElement({ id: "pass" }).sendKeys("1234567");
        this.driver.findElement({ id: "re_pass" }).sendKeys("654321")
        this.driver.findElement({ id: "email" }).sendKeys("xiamin@163.com");
        
    });

    Then('点击注册按钮，注册失败,得到错误提示信息', async function () {
        await this.driver.findElement({ css: ".span-primary" }).click();
        let errtip = await this.driver.findElement({ css: "strong" }).getText();
        return assert.deepEqual('两次密码输入不一致。', errtip);
    });

    When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱输入{string}', function (string, string2, string3, string4) {
        console.log("username", string, "password", string2, "repass", string3, "email", string4)
        this.driver.findElement({ id: "loginname" }).sendKeys(string)
        this.driver.findElement({ id: "pass" }).sendKeys(string2)
        this.driver.findElement({ id: "re_pass" }).sendKeys(string3)
        this.driver.findElement({ id: "email" }).sendKeys(string4)
    });

    Then('点击提交按钮，应该收到{string}', async function (string) {
        await this.driver.findElement({ css: ".span-primary" }).click()
        let errtip = await this.driver.findElement({ css: '#content > div > div.inner > div > strong' }).getText()
        return assert.deepEqual(string, errtip)
    })
})