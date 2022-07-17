(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(v,_,s){"use strict";s.r(_);var t=s(0),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[v._v("#")]),v._v(" 入门")]),v._v(" "),s("p",[v._v("  当启动一个Java项目时，其实就是启动了一个JVM进程。JVM会从入口类开始，不停的加载程序所需要的class字节码文件到内存中，最终将项目的各项功能运行起来。")]),v._v(" "),s("p",[v._v("  在现代操作系统中，操作系统会为每一个应用程序（进程）分配一块虚拟内存空间，而这块虚拟内存空间又分为用户空间和内核空间。")]),v._v(" "),s("p",[v._v("  Java是一门解释执行和编译执行并存的语言。JVM解释器让Java程序快速启动，而编译器让Java程序高效运行。程序需要迅速启动和执行，解释器首先发挥作用，省去编译的时间，立即执行。在程序运行后，随着时间的推移，越来越多的代码被编译为本地代码，可以获取更高的执行效率。")]),v._v(" "),s("p",[v._v("  在一个Java程序执行时，首先通过javac把java文件编译为虚拟机可以识别的class字节码文件。然后由JVM解释器解释class文件中的字节码，转变为机器码执行，这就是"),s("strong",[v._v("解释执行")]),v._v("。由于解释器的存在，"),s("strong",[v._v("JVM可以通过解释器屏蔽掉底层操作系统和硬件的差别")]),v._v("，解释成符合本地平台相关的机器码。解释器是保证"),s("strong",[v._v("一次编译，处处运行")]),v._v("的关键。")]),v._v(" "),s("p",[v._v("  解释执行，有个缺点是每次都要通过解释器生成机器码来让CPU执行，解释的过程会占用很多的时间。于是JVM中诞生了编译器，编译器可以通过"),s("strong",[v._v("热点代码探测技术")]),v._v("，找到运行次数最多的代码，"),s("strong",[v._v("在运行过程中")]),v._v("把这些代码"),s("strong",[v._v("编译")]),v._v("为机器码，因此又被称为"),s("strong",[v._v("动态编译（JIT即时编译）")]),v._v("。而Javac则是静态编译。在下次调用这些代码时跳过解释的步骤，直接执行编译好的机器码，以达到加速运行时间的目的。番外，Oracle的JVM虚拟机叫做HotSpot VM，翻译过来就是热点虚拟机的意思。")]),v._v(" "),s("p",[v._v("  运行过程中会被即时编译器编译的热点代码有两类，一类是被多次调用的方法，另一类是被多次执行的循环体。判断是否是热点代码，主要有两种方式，一种是采样探测法，另一种是计数器探测法。而Hotspot VM采用的就是计数器探测法。")]),v._v(" "),s("h3",{attrs:{id:"类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[v._v("#")]),v._v(" 类加载器")]),v._v(" "),s("p",[v._v("  Java里有四种类加载器，分别是"),s("code",[v._v("Bootstrap Classloader启动类加载器")]),v._v("、"),s("code",[v._v("Extension Classloader拓展类加载器")]),v._v("、"),s("code",[v._v("Application Classloader应用程序类加载器")]),v._v("、"),s("code",[v._v("自定义加载器")]),v._v("。")]),v._v(" "),s("p",[v._v("  启动类加载器主要负责加载Java的核心lib类库。")]),v._v(" "),s("p",[v._v("  拓展类加载器也是类似加载lib\\ext目录下的类。")]),v._v(" "),s("p",[v._v("  应用程序类加载器负责去加载ClassPath环境变量所指定的路径中的类，"),s("strong",[v._v("可以理解为加载我们的项目")]),v._v("。")]),v._v(" "),s("p",[v._v("  JVM通过"),s("strong",[v._v("类加载器")]),v._v("加载所需要的class文件到内存中。一个类从加载到使用，一般需要经历"),s("strong",[v._v("加载->验证->准备->解析->初始化->使用->卸载")]),v._v("这些阶段。")]),v._v(" "),s("ol",[s("li",[s("strong",[v._v("加载阶段")]),v._v("，当一个类需要被使用到的时候，就会触发该阶段。")]),v._v(" "),s("li",[s("strong",[v._v("验证阶段")]),v._v("，根据JVM虚拟机规范来校验加载的class文件是否符合规范。")]),v._v(" "),s("li",[s("strong",[v._v("准备阶段")]),v._v("，首先会为这个类分配一块的内存空间，然后对类变量（static修饰的变量）分配内存空间并赋予初始值。"),s("strong",[v._v("准备阶段是值得关注的")]),v._v("。而这些类信息就是存放在元空间的一块内存区域内。")]),v._v(" "),s("li",[s("strong",[v._v("解析阶段")]),v._v("。")]),v._v(" "),s("li",[s("strong",[v._v("初始化阶段")]),v._v("，核心阶段。在该阶段会真正"),s("strong",[v._v("执行类变量的赋值和静态代码块的执行")]),v._v("的逻辑。")])]),v._v(" "),s("p",[s("strong",[v._v("1、什么时候会触发一个类的初始化")]),v._v("？")]),v._v(" "),s("p",[v._v("  当实例化一个对象的时候，就触发了这个类的加载到初始化的全过程。或者是包含"),s("code",[v._v("main()")]),v._v("方法的主类，必须是立马初始化的。")]),v._v(" "),s("p",[s("strong",[v._v("  初始化一个类的时候，如果他的父类还没有初始化，那么必须先初始化他的父类")]),v._v("。")]),v._v(" "),s("h3",{attrs:{id:"双亲委派模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派模型"}},[v._v("#")]),v._v(" 双亲委派模型")]),v._v(" "),s("p",[v._v("  双亲委派模型，JVM的类加载器是有亲子层级架构的，启动类加载器是最上层的，拓展类加载器在第二层，第三层是应用程序类加载器，最后一层是自定义类加载器。如下图所示。")]),v._v(" "),s("img",{attrs:{src:"aa.jpg"}}),v._v(" "),s("p",[v._v("  当加载一个类的时候，都会委派自己的父类加载器去加载，所以"),s("strong",[v._v("当加载一个类时都是先由启动类加载器去加载的")]),v._v("。负责加载的类加载器在自己负责的范围内，没有找到这个类时，就会下推加载权力到下层的类加载器。最终还是找不到时，就会抛出"),s("code",[v._v("ClasNotFoundException")]),v._v("异常了。")]),v._v(" "),s("p",[v._v("  双亲委派模型的优点是，"),s("strong",[v._v("可以避免多层级的类加载器架构重复加载某些类")]),v._v("，也保护了JDK提供的类。")]),v._v(" "),s("p",[v._v("  类加载器的妙用。在编译时，可以采用一些工具对字节码进行加密，或者做混淆处理，在类加载的时候，考虑采用自定义的类加载器来解密文件即可，就可以保证源代码不被人窃取。")]),v._v(" "),s("h3",{attrs:{id:"jvm内存划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存划分"}},[v._v("#")]),v._v(" JVM内存划分")]),v._v(" "),s("p",[s("strong",[v._v("  线程共享的区域有两块")]),v._v("，分别是"),s("strong",[v._v("元空间")]),v._v("和"),s("strong",[v._v("堆内存")]),v._v("。")]),v._v(" "),s("p",[v._v("  元空间，主要存放class的类信息和常量池。")]),v._v(" "),s("p",[v._v("  堆内存，存放运行过程中创建的各种对象。字符串常量池也位于堆内存。")]),v._v(" "),s("p",[s("strong",[v._v("  线程私有的区域有三块")]),v._v("，分别是栈内存、本地方法栈、程序计数器。每个线程都会有这三个内存区域。程序计数器，记录当前执行的字节码文件指令执行的位置。本地方法栈。一些由C++提供的底层API方法调用。")]),v._v(" "),s("p",[v._v("  虚拟机栈，每个线程都有自己的虚拟机栈。每次执行一个方法时，就会将方法的栈帧压入线程的栈中，方法执行完毕，那么栈帧就会从线程的栈中出栈。栈帧中包含局部变量表、操作数栈、动态链接和方法出口。如下图所示。")]),v._v(" "),s("img",{attrs:{src:"/JVM/虚拟机栈.png",width:"500px"}}),v._v(" "),s("p",[s("strong",[v._v("1、内存分配")])]),v._v(" "),s("p",[v._v("  （1）"),s("code",[v._v("-Xms")]),v._v("：Java堆内存的初始内存大小。")]),v._v(" "),s("p",[v._v("  （2）"),s("code",[v._v("-Xmx")]),v._v("：Java堆内存的最大内存。通常来说，初始堆大小与最大堆大小设置为相同的。")]),v._v(" "),s("p",[v._v("  （3）"),s("code",[v._v("-Xmn")]),v._v("：Java堆内存中新生代的内存大小，扣除剩下的部分即为老年代的内存大小。")]),v._v(" "),s("p",[v._v("  （4）"),s("code",[v._v("-XX:MetaspaceSize")]),v._v("：元空间的初始内存大小。")]),v._v(" "),s("p",[v._v("  （5）"),s("code",[v._v("-XX:MaxMetaspaceSize")]),v._v("：元空间的最大内存大小。")]),v._v(" "),s("p",[v._v("  （6）"),s("code",[v._v("-Xss")]),v._v("：每个线程的栈内存大小。")]),v._v(" "),s("img",{attrs:{src:"/JVM/分代模型.png",width:"400px"}}),v._v(" "),s("p",[s("strong",[v._v("2、逃逸分析")])]),v._v(" "),s("p",[v._v("  在JDK6开始，引入了逃逸分析。JVM经过分析，如果确定对象值在当前函数中使用，当分配内存空间时改为在栈上申请资源，而栈在函数运行完毕是会自动清理的。因此不需要GC，大大降级了GC的压力。")]),v._v(" "),s("p",[s("strong",[v._v("3、堆外内存")])])])}),[],!1,null,null,null);_.default=a.exports}}]);