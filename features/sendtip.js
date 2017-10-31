
let { defineSupportCode } = require('cucumber')

let assert = require('assert');

defineSupportCode(function ({ Given, Then }) {
    Given('用户{string} 密码{string}成功登录系统',async function (string, string2) {
        await this.driver.get('http://118.31.19.120:3000')
        await this.driver.findElement({ css: "a[href='/signin']"} ).click();
        await this.driver.findElement({ css: "#name" }).sendKeys(string);
        await this.driver.findElement({ id: "pass" }).sendKeys(string2);
        // await this.driver.findElement({ css: "a[href='/signin']" }).click()
        // this.driver.findElement({ css: "#name" }).sendKeys(string);
        // this.driver.findElement({ css: "#pass" }).sendkeys(string2)
        await this.driver.findElement({ css: ".span-primary" }).click();
    });

    Then('点击发布话题按钮', async function () {
        await this.driver.findElement({ css: ".span-success" }).click()
    });

    Then('选择发布模块', async function () {
        await this.driver.findElement({ css: "#tab-value > option:nth-child(2)" }).click()
    });

    Then('输入标题', async function () {
        await this.driver.sleep(3000)
        await this.driver.findElement({ id: "title" }).sendKeys('hfwhfwifc wfjwioef');
    });

    Then('输入发布内容', async function () {
        await this.driver.sleep(3000)
        let textarea = await driver.findElement({ css: ".CodeMirror-scroll" }.click()).click()
        await this.driver.actions().mouseMove(textarea).sendKeys('我们都是好孩子').perform()

    });

    Then('点击提交按钮', async function () {
        await driver.sleep(3000)
        await this.driver.findElement({css: "eate_topic_form > fieldset > div > div > div.editor_buttons > input" }).click();
    })
})