# PTer Helper Helper 猫站Helper小工具

## 简介

该工具可以方便猫站的pre-helper们更加高效的检查种子：
* 在审查完毕种子以后，只需点击如下图所示的工具盒中的相应选项，即可一键完成**举报**，**修改副标题**和发布链接至自己的**审核记录帖**的功能。![image-20210403221803575](https://img.pterclub.com/images/2021/04/03/image-20210403221803575.png)
* 在特别审核栏目里，可以自动通过imdb/豆瓣 链接获取相关评分并补全链接同时生成副标题供Pre helper参考

## 依赖环境

* Tamper Monkey Greasy Monkey Violent Monkey 三选一
* 一个现代的浏览器

## 安装教程

### 安装上文的三猴之一：
我本人使用的是firefox浏览器，安装的是Tamper Monkey，因此我就以此为例讲解如何安装
1. 打开Tamper Monkey 官网：https://www.tampermonkey.net/

2. 点击安装（由于我已经安装了，所以是已安装状况）![image-20210403222316022](https://img.pterclub.com/images/2021/04/03/image-20210403222316022.png)

### 安装我的脚本：
1. 可以点击链接安装：https://github.com/scatking/pter_scripts/raw/master/pter_helper_helper.user.js
2. 可以去greasyfork安装：https://greasyfork.org/zh-CN/scripts/424433-pter-helper-helper

## 使用教程

### 前往 usercp.php 配置地址
> 注意：脚本不会同步一楼，因此请不要将一楼作为记录用帖子！

当你前往https://pterclub.com/usercp.php 后，将会发现多出来6个如下栏目：
![屏幕截图 2021-04-02 173317](https://img.pterclub.com/images/2021/04/04/2021-04-02-173317.png)
这里需要填写你在种子管理区自己审核贴的里相应回帖的postid。所谓postid当你编辑回帖时，地址栏里数字id。最后一栏则是填写自己的猫站用户名。
例如：![image-20210403223400932](https://img.pterclub.com/images/2021/04/03/image-20210403223400932.png)
对应情况2的回帖，当点击编辑按钮后会来到编辑界面，此时查看地址栏上面的url，28100即是情况2的postid。

![image-20210403223457169](https://img.pterclub.com/images/2021/04/03/image-20210403223457169.png)

### 审核种子
当你审核完毕种子后，可以点击前文所述的五个图标直接完成举报+回帖记录的工作。
这里说明一下五个图标的作用：

|  图标 | 对应栏目 |                      备注                      |
| :-------- | :------------------------: | :----------------------------: |
|![](https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/badge_gpchecker.png)    |             审核无误             | 对应情况一：种子初步检查无误，建议审核通过 |
| ![](https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/badge_checker.png) |             帮忙修改             |     对应情况二：种子存在问题，但已帮忙修改完成，可以审核通过     |
| ![](https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/x.png) |           需要跟进          | 对应情况需要跟进：不会举报种子，但会在论坛需要跟进栏目添加该地址 |
| ![](https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/quality.gif) |           完成修改            | 对应情况四：种子存在问题，但已修改完成，可以审核通过 |
| ![](https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmpw4xvtvgl/b/bucket-20200224-2012/o/disabled.png) | 并不理我 |对应情况三：发种人未在48小时内完成种子修改，建议进一步处理|

### 获取影片链接与评分
进入特别编辑栏目以后，可以看到多出来了两个绿色的*AUTO FILL*栏目，它们分别对应豆瓣与imdb链接，在相关栏目填写好以后点击即可！
![Snipaste_2021-04-04_14-57-03.png](https://img.pterclub.com/images/2021/04/04/Snipaste_2021-04-04_14-57-03.png)

### 使用示例：
#### 审查种子
![checker](https://img.pterclub.com/images/2021/04/04/checker.gif)

#### 获取链接信息
![douban.gif](https://img.pterclub.com/images/2021/04/04/douban.gif)
