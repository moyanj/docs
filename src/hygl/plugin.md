# 插件开发

## 插件介绍
HoYoGameLauncher的插件是用于拓展HoYoGameLauncher功能的，插件可以拓展HoYoGameLauncher的UI，也可以拓展HoYoGameLauncher的启动逻辑。

## 插件开发

### 可以调用的库
此为在import后的名字
<details>
    <summary>
        查看
    </summary>


- sys
- builtins
- marshal
- nt
- winreg
- time
- zipimport
- codecs
- encodings
- abc
- io
- stat
- genericpath
- ntpath
- os
- site
- math
- operator
- datetime
- types
- enum
- itertools
- keyword
- reprlib
- collections
- functools
- copyreg
- re
- token
- tokenize
- linecache
- traceback
- warnings
- weakref
- string
- threading
- atexit
- logging
- posixpath
- fnmatch
- errno
- zlib
- bz2
- lzma
- shutil
- bisect
- random
- tempfile
- contextlib
- typing
- uuid
- json
- select
- selectors
- socket
- struct
- binascii
- base64
- ssl
- socketserver
- wsgiref
- http
- copy
- email
- urllib
- locale
- calendar
- quopri
- html
- uu
- mimetypes
- signal
- msvcrt
- subprocess
- platform
- cgi
- hashlib
- hmac
- unicodedata
- pickle
- configparser
- ast
- opcode
- dis
- importlib
- inspect
- bottle
- webview
- gettext
- ctypes
- click
- contextvars
- markupsafe
- nturl2path
- colorama
- dataclasses
- pkgutil
- secrets
- werkzeug
- numbers
- decimal
- heapq
- difflib
- pprint
- concurrent
- asyncio
- blinker
- pathlib
- jinja2
- itsdangerous
- flask
- Crypto
- cffi
- pycparser
- lib（内置杂项函数）
- queue
- ipaddress
- urllib3
- idna
- zipfile
- certifi
- stringprep
- requests
- api（内置API请求包）
- multiprocessing
- sysconfig
- glob
- loguru
- plugins（插件）
- env（内置通用变量）
- views（内置服务端的视图函数）
- server（内置服务端）
- main（内置主程序）

</details>

### 不可使用的函数名
- route_files

### 文件结构

```
plugins/<插件名>/─┐
                  ├── __init__.py
                  ├─┐static
                  │ ├── css
                  │ ├── images
                  │ └── js
                  └─┬ templates
                    └── index.html
```

#### `__init__.py`

主文件，必须包含有一个类，其需要继承`lib.plugin.Plugin`这个类。
<br>
其只能调用[该表](#可以调用的库)内的函数，当然，您也可以将库放在`plugins/<插件名>`内，您就可以调用了。（需在import 时加点，如：有一个名为`c`的库,你可以这样导入：`import .c`）
route函数命名规则：
1. 必须以route开头
2. 其以`_`代替url里的`/`
3. 不得使用[此表](#可以调用的库)内的函数名
如route_test_1,就可以在`<插件名>/test/1/`处访问到其返回值

<br>

::: tip
如果可以，我们建议您将整个插件中的代码都编译为pyc字节码文件，这样可以避免一些在经过pyinstaller打包过后所出现的bug。
:::

```python
from lib.plugin import Plugin
class Plugin(Plugin):
    __name__ = "插件名"
    __version__ = "插件版本"
    __description__ = "插件描述"
    __author__ = "插件作者"
    def __init__(self):
        super().__init__()
    def route_<路径>(self, request):
        return "<返回值>"
    def before_reques(self, request):
        # 用于验证请求，True为通过，False为不通过。
        return True
```

#### `static`文件夹

静态文件夹，其下的文件可以在`/<插件名>/files/<文件路径>`访问得到。（文件路径相对于`plugins/<插件名>/static`）

#### `templates`文件夹

模板文件夹，其下的文件会被加载进主页面中，其命名规则[见此](#模板命名规则)

### 模板命名规则

- header.html
    其会被加载进header中（`head`）。
- sidebar.html
    其会被加载进主页面的sidebar中（`.nav`）。
- content.html
    其会被加载进主页面的内容区域中（`.container-fluid`）。
- modal.html
    其会被加载进模态框中。
- settings.html
    其会被加载进设置页面的内容区域中（`.container`）。