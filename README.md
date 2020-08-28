# goScore

**Simple URL's security score check tool. (implement by Golang and Chrome Extension.)**.

# solution

When you're search knowledge, suddenly you may see a alert by Security Scan tool.<br>
You have unfortunately displayed a site that contains a *malware script*.<br>
But you've search a lot of for learn. I don't blame you.<br>
<br>
**Can't we at least easily check if it's suspicious before we open it?**<br>
<br>
I created this tool with that in mind *for you*!<br>

# features

When you right-click and select **context menu**, it opens a **temporary tab** before URL be opened.<br>
In that tab, **request Golang API** on server and will check the following.<br>

- Can name **resolve on the Secure DNS server**?
- Is SSL certificate is **not free type**?
- Is **higher rank search results** on search engines?

Check results are displayed with a **score(star rate)**.

# installation

[download extension from release page](https://github.com/yasutakatou/goScoreExtension/releases)
save binary file, [manually install method on Chrome extension.](https://www.cnet.com/how-to/how-to-install-chrome-extensions-manually/)

# uninstall

use app uninstall method on **Chrome extension**.

# usecase

## 1. prepare server

- run server and **space or enter press** will display **ip addres and port**.

![1](https://github.com/yasutakatou/goScore/blob/pic/1.png)

## 2. setting on Chrome extension

- input server address to chrome extension.

![2a](https://github.com/yasutakatou/goScore/blob/pic/2a.png)

- in case of success, **it will be added**.

![2b](https://github.com/yasutakatou/goScore/blob/pic/2b.png)

## 3. Check URL

- in case of checking url, **right click on link, display context menu, send to server**.

![3a](https://github.com/yasutakatou/goScore/blob/pic/3a.png)

- new tab will open, waiting for making score from server.

![3b](https://github.com/yasutakatou/goScore/blob/pic/3b.png)

- **score displayed**.

![3c](https://github.com/yasutakatou/goScore/blob/pic/3c.png)

If you click center link, **go to original URL**.<br>
**(So, You can check before we open it.)**<br>

note) **if url cached, server return old result**. So, it's fast.<br>

# FYI (many thanks!)

 - A simple Chrome extension that replaces your new tab page with the to-do list of the day along with your to-learn checklist<br>
https://github.com/PoojaB26/ToDoList-ChromeExtension

# LICENSE

MIT License
