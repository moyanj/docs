# 主程序开发

### 环境配置

我们建议您使用`moyancli`进行配置

```bash
pip install moyanlib
moyancli project init hygl
```

### 打包
运行以下命令，即可在pack文件夹中找到打包好的可执行文件。

```shell
python build.py pack
```
### 运行
请先进入 pipenv 虚拟环境，再运行以下命令：
```shell
python main.py
```
main.py的具体参数说明见[#参数](#参数)

### 参数

- `-d`或`--debug` : 启动开发模式（不启动服务端），默认不加。
- `--width <width>` : 窗口宽度，默认1280。
- `--height <height>` : 窗口高度，默认720。
- `--minimized` : 启动时最小化，默认不加。
- `--engine` : 启动时使用的HTML渲染引擎。支持：`Edge`（Microsoft Edge WebView2）、`GTK`、`IE`(不建议)，默认`edgechromium`。
- `--server` : 启动服务端在6553端口上，默认不加。
- `--port <port>` : 服务端端口，默认6553。

