@sendtip
Feature: sendtip function Test
注册功能。
负责人：肖琴
时间：2017-10-29


Background: 用户登录
    Given 用户'imzack' 密码'123456'成功登录系统

Scenario: 发布话题
    Then 点击发布话题按钮
    Then 选择发布模块
    Then 输入标题
    Then 输入发布内容
    Then 点击提交按钮

