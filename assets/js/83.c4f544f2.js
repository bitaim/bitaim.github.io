(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{283:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"执行计划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行计划"}},[s._v("#")]),s._v(" 执行计划")]),s._v(" "),t("p",[s._v("  查看执行计划是SQL调优的重要手段。通常会观察以下几个指标。")]),s._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),t("p",[t("strong",[s._v("  （1）const")]),s._v("：表示使用唯一性索引进行查询，最多返回一行数据。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 主键索引查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 手机号唯一索引查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" phone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'15230795085'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("  （2）eq_ref")]),s._v("：表示使用唯一性索引进行关联查询，最多返回一行数据。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("\n")])])]),t("p",[t("strong",[s._v("  （3）ref")]),s._v("：表示使用非唯一索引进行关联查询，可以匹配到多个符合条件的行。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" address "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" address "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v("\n")])])]),t("p",[t("strong",[s._v("  （4）range")]),s._v("：表示使用索引进行了范围查询，避免了全表扫描。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用的操作符有：!=、=、>、>=、between、in等。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- != 索引失效，对主键索引不管事")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 还是range级别")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- != 索引失效，对于唯一索引、普通索引是失效的")]),s._v("\n")])])]),t("p",[t("strong",[s._v("  （5）index")]),s._v("：表示全索引扫描，比ALL的效率要高一些。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询时使用了覆盖索引")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" phone "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用了索引进行排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("  （6）ALL")]),s._v("：表示需要进行全表扫描，是性能最差的类型。举例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("\n")])])]),t("h3",{attrs:{id:"extra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[s._v("#")]),s._v(" extra")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("（1）Using filesort。说明无法利用索引进行排序，需要利用排序算法进行排序，性能差。\n\n（2）Using temporary。说明使用临时表来保存中间结果，查询之后会删除临时表。\n\n（3）Using index。说明使用了覆盖索引，性能好。\n\n（4）Using where。说明使用了where进行条件过滤。\n\n（5）Using join buffer。在联表查询时，表的连接条件没有用到索引，需要有一个连接缓冲区来存储中间结果。\n")])])]),t("h3",{attrs:{id:"using-filesort-案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-filesort-案例"}},[s._v("#")]),s._v(" Using filesort 案例")]),s._v(" "),t("p",[s._v("  当Extra字段出现"),t("code",[s._v("Using filesort")]),s._v("字段时，表示需要排序。MySQL会给每个线程分配一块内存用于排序，称为"),t("code",[s._v("sort_buffer")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("1、语句执行流程")])]),s._v(" "),t("p",[t("code",[s._v("explain select name, age, province from user where province = '河北省' order by name limit 1000")])]),s._v(" "),t("p",[s._v("  （1）首先初始化一块"),t("code",[s._v("sort_buffer")]),s._v("内存。")]),s._v(" "),t("p",[s._v("  （2）在 province索引 中寻找第一个满足条件的主键ID。")]),s._v(" "),t("p",[s._v("  （3）再到主键索引中寻找完整的行数据，取三个字段的值放入"),t("code",[s._v("sort_buffer")]),s._v("中。")]),s._v(" "),t("p",[s._v("  （4）重复（2）、（3）步骤，直到不满足条件为止。")]),s._v(" "),t("p",[s._v("  （5）对"),t("code",[s._v("sort_buffer")]),s._v("中的数据按照"),t("code",[s._v("name")]),s._v("字段进行排序。")]),s._v(" "),t("p",[s._v("  （6）将排序后的前1000行数据返回给客户端。")]),s._v(" "),t("p",[t("strong",[s._v("2、临时文件辅助排序")])]),s._v(" "),t("p",[s._v("  如果整个排序的过程，可以在内存中完成，那很好。如果完成不了，则需要使用到"),t("strong",[s._v("外部排序")]),s._v("。")]),s._v(" "),t("p",[s._v("  取决于"),t("code",[s._v("sort_buffer_size")]),s._v("的参数大小，该参数决定每个线程分得排序缓冲区的内存大小。如果要排序的数据量小于该块内存，则可以在内存中完成。如果大于这块内存，就需要利用磁盘临时文件辅助排序（归并排序算法）。")]),s._v(" "),t("p",[t("strong",[s._v("3、优化")])]),s._v(" "),t("p",[s._v("  参数"),t("code",[s._v("max_length_for_sort_data")]),s._v("是MySQL中专门控制用于排序的行数据长度的参数。如果单行的长度超过这个值，MySQL就会选择另外一个算法。")]),s._v(" "),t("p",[s._v("  首先把"),t("code",[s._v("max_length_for_sort_data")]),s._v("参数设置为16，新的算法放入"),t("code",[s._v("sort_buffer")]),s._v("的字段只有name和id两个字段。这样"),t("code",[s._v("sort_buffer")]),s._v("中能放的数据量就会增多，但由于缺少了两个字段，排序后的结果不能直接返回给客户端了。")]),s._v(" "),t("p",[s._v("  （1）首先初始化一块"),t("code",[s._v("sort_buffer")]),s._v("内存。")]),s._v(" "),t("p",[s._v("  （2）在province索引中找到第一个满足"),t("code",[s._v("province='河北省'")]),s._v("条件的主键ID。")]),s._v(" "),t("p",[s._v("  （3）再到主键索引中寻找完整的行数据，取name、id的值，放入"),t("code",[s._v("sort_buffer")]),s._v("中。")]),s._v(" "),t("p",[s._v("  （4）重复（2）、（3）步骤，直到不满足条件为止。")]),s._v(" "),t("p",[s._v("  （5）对"),t("code",[s._v("sort_buffer")]),s._v("中的数据按照字段name进行排序。")]),s._v(" "),t("p",[s._v("  （6）取排序后的前1000行，并按照id的值到原表中取出province、name、age三个字段返回给客户端。")]),s._v(" "),t("p",[s._v("  这种算法，使得"),t("code",[s._v("sort_buffer")]),s._v("中存储的行数变多了，因此使用的临时文件也变少了。但多了回表查询的过程。")]),s._v(" "),t("p",[s._v("  其实，最好的办法还是在排序字段上增加索引，就可以避免使用排序。")]),s._v(" "),t("h3",{attrs:{id:"using-temporay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-temporay"}},[s._v("#")]),s._v(" Using temporay")]),s._v(" "),t("p",[s._v("  表示需要创建临时表。而临时表并不全是内存表，是由"),t("code",[s._v("temp_table_size")]),s._v("参数决定的，参数默认值是16MB。如果临时表超过了该值，内存表就会转变为临时表。磁盘临时表使用的引擎默认是InnoDB，是由参数"),t("code",[s._v("internal_tmp_disk_storage_engine")]),s._v("控制的。")])])}),[],!1,null,null,null);e.default=r.exports}}]);