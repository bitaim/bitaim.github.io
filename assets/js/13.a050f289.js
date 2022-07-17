(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(v,a,t){"use strict";t.r(a);var _=t(0),s=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[v._v("#")]),v._v(" 工具")]),v._v(" "),t("p",[v._v("  当系统上线后，需要对"),t("strong",[v._v("线上系统的JVM进行监控")]),v._v("，通常有两种方法。")]),v._v(" "),t("p",[v._v("  一是在每天高峰期和低峰期都使用jstat、jmap、jhat等工具去看看线上系统的JVM运行是否正常，有没有频繁Full GC的情况。")]),v._v(" "),t("p",[v._v("  二是在一些中大型公司都会部署专门的监控系统，比较常见的有Zabbix、OpenFalcon、Ganglia等等。然后把部署的系统统计项发送到这些监控里去。在这些监控系统可视化的页面里，看到各种指标。还可以设置监控告警。")]),v._v(" "),t("h2",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[v._v("#")]),v._v(" jstat")]),v._v(" "),t("p",[v._v("  对于运行中的系统，如果要检查JVM的整体情况，比较实用的工具之一是jstat。可以轻易的看到当前系统中，JVM内的Eden、Survivor、老年代的内存使用情况，以及Young GC和Full GC的执行次数及耗时，根据这些来判断系统的内存使用压力以及GC压力。")]),v._v(" "),t("p",[v._v("  jstat（是Statistics的简写，统计的意思） 可以非常轻松便捷的了解到线程系统的运行状态，从新对象增速、Young GC触发频率以及耗时，再到对象进入老年代的增速以及Full GC触发频率以及耗时，可以完全摸清楚线上系统的JVM运行情况，为可能要做的优化做准备。常用命令是jstat -gc "),t("PID",[v._v(" 10000 10，代表每隔10秒钟监控一次JVM内存情况 执行10次。")])],1),v._v(" "),t("p",[v._v("  比如通过jstat，我们可以观察到JVM新增对象的速度，那么是哪些对象被创建并占据内存呢？这要用到jmap和jhat，用来观察线程JVM中的对象分布，了解到系统运行过程中，哪些对象占据了主要位置，占据了多少内存空间，对系统运行有更加细致的了解。")]),v._v(" "),t("h3",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[v._v("#")]),v._v(" 命令")]),v._v(" "),t("ol",[t("li",[v._v("通过"),t("code",[v._v("jps -l")]),v._v("找到Java进程的PID。")]),v._v(" "),t("li",[v._v("执行"),t("code",[v._v("jstat -gc PID")]),v._v("，就可以看到该Java进程（本质是一个JVM）的内存和GC情况了。")]),v._v(" "),t("li",[v._v("执行"),t("code",[v._v("jstat -gc PID 180000 10")]),v._v("，每隔三分钟执行一次统计，连续执行10次。")])]),v._v(" "),t("p",[t("strong",[v._v("其他命令")]),v._v("：最完整、最实用、最常用的还是"),t("code",[v._v("jstat -gc")]),v._v("命令，足够日常分析JVM的运行情况。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("jstat -gccapacity PID")]),v._v("：堆内存分析")]),v._v(" "),t("li",[t("code",[v._v("jstat -gcnew PID")]),v._v("：年轻代GC分析，TT和MTT可以看到对象在年轻代存活的年龄和存活的最大年龄")]),v._v(" "),t("li",[t("code",[v._v("jstat -gcnewcapacity PID")]),v._v("：年轻代内存分析")]),v._v(" "),t("li",[t("code",[v._v("jstat -gclod PID")]),v._v("：老年代GC分析")]),v._v(" "),t("li",[t("code",[v._v("jstat -gcoldcapacity PID")]),v._v("：老年代内存分析")]),v._v(" "),t("li",[t("code",[v._v("jstat -gcmetacapacity PID")]),v._v("：元数据区内存分析")])]),v._v(" "),t("h2",{attrs:{id:"jmap、jhat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmap、jhat"}},[v._v("#")]),v._v(" jmap、jhat")]),v._v(" "),t("p",[v._v("  如果单单只是要了解JVM的运行状况，然后去进行JVM GC优化，通常来说jstat完全够用。如果有的时候可能会发现JVM新增对象的速度很快，"),t("strong",[v._v("如果想去知道到底什么对象占据了那么多的内存")]),v._v("。如果发现有的对象在代码中可以优化一下创建时机，避免那种对象对内存占用过大，那么也许可以去反过来优化一下代码。其实如果不是出现OOM那种极端情况，也并没有那么大的必要去着急优化代码。")]),v._v(" "),t("p",[v._v("  如果当前Java进程莫名其妙的内存占用非常高，可以将当前内存快照dump下来，分析对象实例占用比例。常用的可视化工具为visualVM，该软件在安装jdk时就自带（jdk/bin目录下），可以将线上内存快照在该软件导入并分析。")]),v._v(" "),t("h3",{attrs:{id:"命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令-2"}},[v._v("#")]),v._v(" 命令")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("jmap -heap PID")]),v._v(" 大致会打印出来堆内存相关的一些参数，当前堆内存里各个区域基本的情况。"),t("strong",[v._v("一般不会用jmap去看这些信息，毕竟信息还没jstat全")]),v._v("。但是这种方式显示的信息更加人性化。")]),v._v(" "),t("li",[t("code",[v._v("jmap -histo PID")]),v._v(" 了解系统运行时的对象分布。按照各种对象占用内存空间的大小降序排列，把占用内存最多的对象放在最上面。")]),v._v(" "),t("li",[t("code",[v._v("jmap -dump:live,format=b,file=dump.hprof PID")]),v._v(" 把这一时刻JVM堆内存里所有对象的快照放到文件里去，会在当前目录下生成一个dump.hrpof文件，这是一个二进制文件，供后续分析。")]),v._v(" "),t("li",[t("code",[v._v("jhat dump.hprof -port 7000")]),v._v(" 使用jhat在浏览器中分析堆转出快照，jhet内置了web服务器，支持通过浏览器以图形化的方式来分析。")])]),v._v(" "),t("h2",{attrs:{id:"jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[v._v("#")]),v._v(" jps")]),v._v(" "),t("p",[v._v("  查看当前机器上的Java进程及进程号。")]),v._v(" "),t("h2",{attrs:{id:"jconsole"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jconsole"}},[v._v("#")]),v._v(" jconsole")]),v._v(" "),t("p",[v._v("  弹出Java监控管理控制台，选择一个Java进程进行连接，以图形化的方式查看内存、线程等信息。Windows系统上可使用，Linux生产环境无法使用页面化工具。")]),v._v(" "),t("h3",{attrs:{id:"使用mat分析内存快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用mat分析内存快照"}},[v._v("#")]),v._v(" 使用MAT分析内存快照")]),v._v(" "),t("h2",{attrs:{id:"上线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上线"}},[v._v("#")]),v._v(" 上线")]),v._v(" "),t("p",[v._v("  任何一个新系统上线都得进行压测，此时在模拟线上压力的场景下，可以用jstat等工具去观察JVM的运行内存模型。主要观察如下指标：")]),v._v(" "),t("ol",[t("li",[v._v("Eden区的对象增长速度多快")]),v._v(" "),t("li",[v._v("Young GC频率多高")]),v._v(" "),t("li",[v._v("一次Young GC多长耗时")]),v._v(" "),t("li",[v._v("Young GC过后多少对象存活")]),v._v(" "),t("li",[v._v("老年代的对象增长速率多高")]),v._v(" "),t("li",[v._v("Full GC频率多高")]),v._v(" "),t("li",[v._v("一次Full GC耗时")])]),v._v(" "),t("p",[v._v("  压测时，可以完全精准的通过观察jstat观察出来上述JVM指标，让我们对JVM运行时的情况了如指掌，然后可以尽可能的优化JVM的内存分配，尽量避免对象频繁进入老年代，尽量让系统仅仅有Young GC。线上系统的监控和优化，系统上线之后，务必进行一定监控，可以使用Zabbix、Open-Falcon之类的工具来监控机器和JVM的运行，频繁Full GC就要报警。")]),v._v(" "),t("p",[v._v("  频繁Full GC的几种"),t("strong",[v._v("表现")]),v._v("。一是机器CPU负载过高。二是频繁Full GC报警。三是系统无法处理请求或者处理很慢。")]),v._v(" "),t("p",[v._v("  频繁Full GC的几种"),t("strong",[v._v("常见原因")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("一是系统承载高并发请求，或者处理数据量过大，导致Young GC频繁，而且每次Young GC过后存活对象太多，内存分配不合理，Survivor区域过小，导致对象频繁进入老年代，频繁触发Full GC。")]),v._v(" "),t("li",[v._v("系统一次性加载过多数据进内存，搞出来很多大对象，导致频繁有大对象进入老年代，必然频繁触发Full GC。")]),v._v(" "),t("li",[v._v("系统发生了内存泄漏，莫名奇妙创建大量的对象，始终无法回收，一直占用在老年代里，必然频繁触发Full GC。")]),v._v(" "),t("li",[v._v("Metaspace（永久代）因为加载类过多触发Full GC。")]),v._v(" "),t("li",[v._v("误调用System.gc() 触发Full GC。")])]),v._v(" "),t("h2",{attrs:{id:"gc日志分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc日志分析"}},[v._v("#")]),v._v(" GC日志分析")]),v._v(" "),t("p",[t("strong",[v._v("1、Metadata GC")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("【Full GC（Metadata GC Threshold）】\n")])])]),t("p",[v._v("  当出现上述GC的日志时，就代表是"),t("strong",[v._v("由元空间导致的Full GC")]),v._v("。由于元空间区域频繁被塞满，进而触发Full GC。而"),t("strong",[v._v("Full GC会带动CMS回收老年代")]),v._v("。")]),v._v(" "),t("p",[v._v("  原空间存储的是类信息。如果频繁出现上述情况，代表不停的有新的类产生被加载到元空间区域。然后不停的把元空间区域占满，接着触发一次Full GC回收掉元空间区域的部分类。接着反复如此。")]),v._v(" "),t("p",[v._v("  可以通过参数"),t("code",[v._v("-XX:TraceClassLoading")]),v._v("和参数"),t("code",[v._v("-XX:TraceClassUnloading")]),v._v("来追踪类的加载和卸载情况，会通过日志打印出来JVM中加载和卸载了哪些类。")]),v._v(" "),t("p",[v._v("  其原因可能就是在代码中使用了大量的反射方法，导致不停的创建"),t("code",[v._v("Method")]),v._v("类，JVM就会动态的将这些类加载到元空间区域里。对于这些类，它们的class对象都是软引用的。而软引用，在正常情况下是不会被回收的，而当内存不足时就会回收这些由软引用包装的类。")]),v._v(" "),t("p",[v._v("  那么是如何判断这些软引用对象是否应该被回收呢？是通过如下公式"),t("code",[v._v("clock - timestamp <= freespace * SoftRefLRUPolicyMSPerMB")]),v._v("判断的。"),t("code",[v._v("clock - timestamp")]),v._v("代表了一个软引用对象多久没有被访问过了。"),t("code",[v._v("freespace")]),v._v("代表JVM中空闲的内存空间。"),t("code",[v._v("SoftRefLRUPolicyMSPerMB")]),v._v("代表每1MB内存空间可以允许软引用对象存活多久，其默认值是1000毫秒。")])])}),[],!1,null,null,null);a.default=s.exports}}]);