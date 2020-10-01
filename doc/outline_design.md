# 概要设计



### 运行环境

服务器： apache/nignx。



### 系统架构设计

  HIPO图（Hierarchy Plus Input/Processing/Output）是表示软件结构的一种图形工具，以模块分解的层次性以及模块内部输入、处理、输出三大基本部分为基础建立的。它由两部分组成：**1.H图（层次图）**：描述软件总的模块层次结构**2.IPO图**：描述每个模块输入、输出、处理功能及模块调用的详细情况，相当于为一个模块写的一份说明。

![系统架构图](.\image\系统架构图.png)



### 数据结构设计

接口设计：



用户接口

外部接口

内部接口



### 数据库设计

数据库采用GraphQL/Relay



E-R图：

个人信息：昵称，密码，星座、介绍，标签，长期目标、中期目标、今日目标，首次注册，学力值。

消息：标题，发布者，接收者，内容，时间，已读

对手列表： 个人，对手，是否建立关系

今日任务：用户， 今日列表（树状），总结，

LOKR: 长期目标。 OKR(树状结构), 时间，


