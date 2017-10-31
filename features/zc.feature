Feature: singup function Test
注册功能。
负责人：肖琴
时间：2017-10-22

# Scenario: 发布话题成功
#     Given 点击发布话题按钮
#     When 选择模块，输入标题，输入内容
#     Then 点击提交按钮。

@dianji
Scenario: 点击注册按钮
Given 导航到注册页面
When 在注册用户信息中填入注册信息
Then 点击注册按钮，注册失败,得到错误提示信息

@zhuche
Scenario Outline:不同场景注册
    Given 导航到注册页面
    When  用户名输入'<username>',密码输入'<password>',重复密码输入'<repass>',邮箱输入'<email>'
    Then  点击提交按钮，应该收到'<tipmessage>'
    
    Examples:
    |username|pass|repass|email|tipmessage|
    |        | 123| 123  |123@qq.com|信息不完整。| 
    |xiaoqinqin|123|1234|123@qq.com|两次密码输入不一致。|

