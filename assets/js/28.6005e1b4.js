(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{225:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"acid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[t._v("#")]),t._v(" ACID")]),t._v(" "),r("h3",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),r("h3",{attrs:{id:"-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),r("h3",{attrs:{id:"-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),r("h3",{attrs:{id:"隔离性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#隔离性"}},[t._v("#")]),t._v(" 隔离性")]),t._v(" "),r("p",[t._v("  MySQL的"),r("strong",[t._v("事务隔离级别")]),t._v("有读未提交，读已提交，可重复读，串行化。默认的事务隔离级别是可重复读。")]),t._v(" "),r("p",[t._v("  MVCC多版本并发控制在读已提交、可重复读隔离级别下生效，解决在并发情况下读写互斥的问题。通过一致性视图读取数据行旧版本的值，使读写分离。")]),t._v(" "),r("p",[t._v("  在读已提交隔离级别下，每一次执行查询语句时，都会重新生成一致性视图。在可重复读隔离级别下，只有第一次执行查询语句时，才会生成一致性视图。")]),t._v(" "),r("p",[t._v("  不可重复读和幻读的侧重点不同，不可重复读侧重点在修改操作，幻读侧重点是新增操作和删除操作。")]),t._v(" "),r("p",[t._v("  快照都，普通的查询语句。当前读，增删改以及带有"),r("code",[t._v("for update")]),t._v("或者"),r("code",[t._v("lock in share mode")]),t._v("的查询语句。")]),t._v(" "),r("p",[t._v("  在重复读隔离级别下，"),r("strong",[t._v("MVCC解决快照读的不可重复读问题，间隙锁解决当前读不可重复读的问题")]),t._v("。")]),t._v(" "),r("p",[t._v("MySQL的数据都是行式存储，每一行数据都会有一个隐藏的字段，")])])}),[],!1,null,null,null);a.default=e.exports}}]);