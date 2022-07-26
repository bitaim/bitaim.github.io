(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(e,v,t){"use strict";t.r(v);var a=t(0),_=Object(a.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[e._v("#")]),e._v(" 实战")]),e._v(" "),t("p",[e._v("  在线上系统中，常见的机器配置有2核4G和4核8G。")]),e._v(" "),t("p",[e._v("  如果使用2核4G的机器来部署系统，那么内存是有点紧凑的。因为机器有4G内存，但是机器本身也要占用一些内存空间，最后JVM进程最多也就2G内存。JVM的2G内存还要分配给堆内存、元空间、栈内存，那么堆内存可能最多也就1G内存空间。堆内存还分为新生代和老年代，新生代和老年代也就各500MB左右的内存空间。")]),e._v(" "),t("p",[e._v("  如果使用4核8G的机器来部署系统，那么JVM进程至少可以分配到4G内存，其中1G分配给元空间和栈内存，3G分配给堆内存，新生代可以分配2G内存，老年代可以分配1G内存。")]),e._v(" "),t("p",[t("strong",[e._v("  JVM优化，就是可能让对象在新生代里分配和回收，尽量不让太多的对象频繁进入老年代，避免频繁对老年代进行垃圾回收。同时给系统充足的内存大小，避免新生代频繁的进行垃圾回收")]),e._v("。")]),e._v(" "),t("p",[e._v("  尽量让每次Young GC后的存活对象小于Survivor区的50%，都留在年轻代里，尽量不让对象进入老年代。尽量减少Full GC的频率，避免频繁Full GC对JVM性能的影响。")]),e._v(" "),t("h3",{attrs:{id:"模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[e._v("#")]),e._v(" 模板")]),e._v(" "),t("p",[t("code",[e._v("-Xms4096M -Xmx4096MB -Xmn3072MB -Xss1M -XX:MetaspaceSize=256MB -XX:MaxMetaspaceSize=256MB -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFaction=92 -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+CMSParallelInitialMarkEnabled -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -XX:+PrintGCDetails -Xloggc:gc.log -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/usr/local/oom")])]),e._v(" "),t("ol",[t("li",[t("code",[e._v("-Xms4096M -Xmx4096MB -Xmn3072MB -Xss1M -XX:MetaspaceSize=256MB -XX:MaxMetaspaceSize=256MB")]),e._v("，指定了堆的初始内存和最大内存，新生代的内存，栈内存，元空间的初始内存和最大内存。")]),e._v(" "),t("li",[t("code",[e._v("-XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFaction=92 -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+CMSParallelInitialMarkEnabled -XX:+CMSScavengeBeforeRemark -XX:+CMSParallelRemarkEnabled")]),e._v("，指定了垃圾回收器以及CMS的一些参数设置，比如老年代内存到达92%自动触发GC，以及每个GC后进行内存整理，初始标记和重新标记采用多线程，重新标记之前执行Young GC来减少重新标记的时间（因为老年代的对象可能会指向新生代的对象，因此回收新生代，来减少GC Roots的时间）。")]),e._v(" "),t("li",[t("code",[e._v("-XX:+DisableExplicitGC")]),e._v("，禁止代码中出现的"),t("code",[e._v("System.gc()")]),e._v("的使用。可能会导致堆外内存无法被回收。")]),e._v(" "),t("li",[t("code",[e._v("-XX:+PrintGCDetails -Xloggc:gc.log -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/usr/local/oom")]),e._v("，当发生GC时会打印日志，当发生OOM时会自动生成一份内存快照方便我们定位问题。")])]),e._v(" "),t("h3",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[e._v("#")]),e._v(" 思路")]),e._v(" "),t("p",[e._v("  建议"),t("strong",[e._v("调整新生代和老年代的大小")]),e._v("。对于普通的业务系统，大部分对象明显都是短生命周期的，根本不应该频繁进入老年代。也没有必要给老年代维持过大的内存空间，"),t("strong",[e._v("首先得让对象尽量留在新生代里")]),e._v("。")]),e._v(" "),t("p",[e._v("  要尽量让对象分配和消亡在新生代里，所以要分配新生代一个足够大的内存空间，比如3G。要评估Survivor区空间到底够不够大，避免Young GC后存活对象过多（大于Survivor区）升入老年代，也要避免Survivor区由于动态年龄判断升入老年代。")]),e._v(" "),t("p",[e._v("  Full GC优化的前提是对Minor GC的优化，Minor GC的优化的前提是合理分配内存空间，尽量让Minor GC之后的存活对象留在Survivor区而不要去老年代，其余的参数不做太多优化，系统性能基本上就不会太差。")]),e._v(" "),t("h3",{attrs:{id:"内存溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出"}},[e._v("#")]),e._v(" 内存溢出")]),e._v(" "),t("p",[t("strong",[e._v("1、Metaspace OOM")])]),e._v(" "),t("p",[e._v("  当元空间的内存区域不足时，就会触发内存溢出。触发一次Full GC。")]),e._v(" "),t("p",[e._v("  元空间区域不足的原因。一是使用了默认的JVM参数，导致元空间本身的内存区域过小，又引入了许多jar包，导致进入元空间的类信息太多了。二是代码中有大量使用反射的地方，导致不停的有新类进入元空间。")]),e._v(" "),t("p",[e._v("  解决方案。一是指定元空间内存大小。二是缓存反射对象，避免频繁产生新的类。")]),e._v(" "),t("p",[t("strong",[e._v("2、Java heap space OOM")])]),e._v(" "),t("p",[e._v("  发生堆内存溢出其实就是有限的内存中存放了过多的对象，而且大多数都是存活的，此时即使GC过后大部分对象还是存活的，所以要继续放入更多的对象已经不可能了，只能引发内存溢出的问题。一般发生内存溢出有两种主要的场景，一是系统承载高并发请求，因为请求量过大，导致大量对象都是存活的。二是系统有内存泄漏的问题，莫名其妙创建了许多对象，结果对象都是存活的，没有及时取消对他们的引用，导致触发GC还是无法回收，此时只能引发内存溢出。")]),e._v(" "),t("p",[t("strong",[e._v("3、Direct buffer OOM")])]),e._v(" "),t("p",[e._v("  当堆外内存不足时，就会触发内存溢出。堆外内存可以通过"),t("code",[e._v("DirectByteBuffer")]),e._v("类去申请，"),t("code",[e._v("DirectByteBuffer")]),e._v("类的对象是分配在堆内存中的，却引用了一块堆外的内存。当对象没有引用时，就会在某一次Young GC或者Full GC的时候给回收掉。然后就会把关联的堆外内存回收掉。")]),e._v(" "),t("p",[e._v("  堆外内存溢出的原因可能是，这些"),t("code",[e._v("DirectByteBuffer")]),e._v("类的对象由于Young GC被升入到老年代，慢慢的成为了垃圾对象，但是由于这些对象过小，很久才会发生Full GC，所以也不会被回收，堆外内存也就无法被释放。最后导致没有可用的堆外内存。")]),e._v(" "),t("p",[e._v("  NIO也考虑到这个情况，在每次分配堆外内存时，都会调用"),t("code",[e._v("System.gc()")]),e._v("去提醒JVM回收掉一些"),t("code",[e._v("DirectByteBuffer")]),e._v("类的对象，来释放堆外内存空间，就可以有堆外内存可以使用了。而这个JVM参数"),t("code",[e._v("-XX:+DisableExplicitGC")]),e._v("会禁用"),t("code",[e._v("System.gc()")]),e._v("，导致无法释放堆外内存。")]),e._v(" "),t("p",[e._v("  解决方案。给新生代更大的内存空间，避免"),t("code",[e._v("DirectByteBuffer")]),e._v("类的对象进入老年代。另一个就是放开"),t("code",[e._v("-XX:+DisableExplicitGC")]),e._v("，让"),t("code",[e._v("System.gc()")]),e._v("生效。")]),e._v(" "),t("p",[t("strong",[e._v("4、Stack 内存溢出")])]),e._v(" "),t("p",[e._v("  每个线程的虚拟机栈大小默认为1MB。每次调用方法时都会创建一个栈帧并压入栈，每一个栈帧都是消耗内存的。大量的栈帧总归会消耗完1MB的内存，最终导致内存溢出。通常来说，栈的内存溢出都是由代码BUG导致的，比如递归死循环。")])])}),[],!1,null,null,null);v.default=_.exports}}]);