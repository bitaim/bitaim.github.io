(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(t,v,_){"use strict";_.r(v);var e=_(0),n=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"读写锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[t._v("#")]),t._v(" 读写锁")]),t._v(" "),_("p",[t._v("  在程序中使用 "),_("strong",[t._v("ReentrantReadWriteLock")]),t._v(" 时，默认情况下是非公平模式，在该模式下加锁性能更高。但是存在"),_("strong",[t._v("写线程饥饿")]),t._v("的问题。")]),t._v(" "),_("p",[t._v("  由于读锁和写锁的互斥性，一旦有读线程成功加读锁，后续的写线程由于互斥会进入队列阻塞等待。在等待过程中，如果有大量的读线程尝试加读锁，由于非公平模式可以直接尝试加读锁，造成不断有读线程加读锁，队列中的写线程就得一直阻塞，迟迟拿不到锁，这就是写线程饥饿问题。")]),t._v(" "),_("p",[t._v("  使用读写锁想要解决写线程饥饿问题。一是牺牲一些性能，在使用时指定为公平锁模式。二是使用 "),_("strong",[t._v("StampedLock")]),t._v(" 。")]),t._v(" "),_("p",[_("strong",[t._v("StampedLock")]),t._v("是JDK8引入的新的API，为了解决"),_("strong",[t._v("ReentrantReadWriteLock")]),t._v("的性能问题（写锁的饥饿）。")]),t._v(" "),_("p",[t._v("  设计初衷是作为一个内部工具类，用于辅助开发其他的线程安全组件，而不是让开发人员大量使用。用不好的话，容易产生莫名其妙的问题。不支持重入，在使用过程中，场景非常受限。")]),t._v(" "),_("p",[t._v("  特性如下：")]),t._v(" "),_("ul",[_("li",[t._v("操作数据有三种方式，乐观读、读锁、写锁，所有获取锁的方法都要返回一个邮戳，释放锁的方法也需要一个邮戳。")]),t._v(" "),_("li",[t._v("读锁和写锁均为悲观锁模式，相互互斥。")]),t._v(" "),_("li",[t._v("读锁和写锁可以互相转换。")]),t._v(" "),_("li",[t._v("不可重入加锁。")])])])}),[],!1,null,null,null);v.default=n.exports}}]);