(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{395:function(_,v,t){"use strict";t.r(v);var a=t(14),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[_._v("#")]),_._v(" 分布式事务")]),_._v(" "),t("p",[_._v("  首先不管有多丰富的理论知识，还是见过多大的世面，"),t("strong",[_._v("分布式事务能不用就不用，在业务上避免分布式事务")]),_._v("。")]),_._v(" "),t("p",[_._v("  一提到分布式事务，就会联想到MySQL多个库的情况。当与多个数据库建立连接时，就无法在数据库层面对事务进行统一管理。由此，诞生了分布式事务的问题。其实对于其他的存储，也是分布式事务的范畴，比如Redis、MQ、Elasticsearch等。")]),_._v(" "),t("h2",{attrs:{id:"强一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强一致性"}},[_._v("#")]),_._v(" 强一致性")]),_._v(" "),t("p",[t("strong",[_._v("1、一致性协议2PC")])]),_._v(" "),t("img",{attrs:{src:"/分布式/01_两阶段提交.png",width:"500px"}}),_._v(" "),t("p",[_._v("  两阶段提交的意思是，将一次提交分成两个阶段。在第一阶段，"),t("strong",[_._v("事务协调者")]),_._v("询问各个"),t("strong",[_._v("事务参与者")]),_._v("能否提交事务。在第二阶段，事务协调者根据第一阶段的响应结果，对所有的事务参与者下达统一提交或者统一回滚的消息，来保证其原子性。")]),_._v(" "),t("p",[_._v("  事务协调者在第一阶段了解了事务的走向，"),t("strong",[_._v("但不能保证第二阶段所有的事务参与者都能够接收到消息")]),_._v("。如果存在事务参与者丢失了消息，就会造成数据不一致的情况。为了解决这个问题，因此出现了3PC。")]),_._v(" "),t("p",[t("strong",[_._v("2、一致性协议3PC")])]),_._v(" "),t("img",{attrs:{src:"/分布式/02_三阶段提交.png",width:"500px"}}),_._v(" "),t("p",[_._v("  3PC是在2PC的中间加入了"),t("strong",[_._v("预提交阶段")]),_._v("。既让事务协调者知道事务可以提交或者回滚，也让事务参与者清楚事务下一步的走向。")]),_._v(" "),t("p",[_._v("  在第三阶段提交阶段，如果丢失了事务协调者的消息，事务参与者会等待一定时间，如果超时，就会执行第二阶段的下一步操作。")]),_._v(" "),t("p",[t("strong",[_._v("3、落地方案")])]),_._v(" "),t("p",[t("strong",[_._v("  XA规范")]),_._v("，是支持分布式事务的数据库厂商需要遵循的规范。厂商都是支持到两阶段提交，因为三阶段在理论上可以这么做，而两阶段也只是在理论上有这个问题，但出现的概率太低了。三阶段投入成本太高了，没必要，因此两阶段就够了。如果两阶段提交真的出现问题，那就需要"),t("strong",[_._v("人工对齐")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("4、缺点")])]),_._v(" "),t("p",[_._v("  在一个分布式事务期间，多个"),t("strong",[_._v("事务参与者对所操作的资源加锁")]),_._v("，在分布式事务结束时才会释放锁。导致并发起不来，吞吐量受到了影响。因此XA规范很少使用，因为性能损耗大。")]),_._v(" "),t("p",[_._v("  为了预防事务协调者挂了，事务协调者在本地需要记录事务执行状态，恢复后该提交的提交。可以弥补两阶段的不足，但如果机器挂了怎么办，所以不支持异地恢复。")]),_._v(" "),t("h2",{attrs:{id:"柔性事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#柔性事务"}},[_._v("#")]),_._v(" 柔性事务")]),_._v(" "),t("p",[_._v("  在应用时更多地使用柔性事务，"),t("strong",[_._v("追求最终一致性")]),_._v("。主要有TCC、saga方案。但TCC和saga模式业务方都不愿意用，对业务的侵入太大了，开发效率低。")]),_._v(" "),t("h3",{attrs:{id:"tcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcc"}},[_._v("#")]),_._v(" TCC")]),_._v(" "),t("img",{attrs:{src:"/分布式/03_TCC.png",width:"500px"}}),_._v(" "),t("p",[_._v("  TCC（Try-Confirm-Cancel）。有两条流程可以走，一条是"),t("code",[_._v("try-confirm")]),_._v("，另一条是"),t("code",[_._v("try-cancel")]),_._v("流程。")]),_._v(" "),t("ul",[t("li",[_._v("Try，尝试执行业务，预留资源。")]),_._v(" "),t("li",[_._v("Confirm，确认执行业务，使用Try阶段资源。")]),_._v(" "),t("li",[_._v("Cancel，取消执行业务，释放try阶段预留的资源。")])]),_._v(" "),t("p",[_._v("  比如张三需要给李四转账100元。在try1阶段，首先对张三的账户预留（冻结）100元钱，在try2阶段，检查李四账号是否正常。都OK，在Confirm阶段，给李四账户加钱就可以了。或者在cancel阶段，给张三账户加钱就可以了。")]),_._v(" "),t("p",[_._v("  按照正常逻辑好好写，几乎不会出问题。如果按着TCC的方式来写这个逻辑，业务逻辑更复杂了，保不准就会出问题。又没有一个好的机制都保证逻辑都能正常执行，包括容错，所有的逻辑都交给业务去做。有框架时，尽量框架保证。没框架时，业务尽量保证。业务都保证不了时，需要人工介入来修复数据。")]),_._v(" "),t("h3",{attrs:{id:"saga模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#saga模型"}},[_._v("#")]),_._v(" saga模型")]),_._v(" "),t("p",[_._v("  saga适合做业务流程比较长的情况，是一个长事务。")]),_._v(" "),t("p",[_._v("  saga的思想是，将"),t("strong",[_._v("一个分布式事务拆分为多个本地事务")]),_._v("，就当成多个事务来看，谁和谁都没有关系，"),t("strong",[_._v("每个本地事务都有相应的执行模块和本地模块")]),_._v("。当任意一个本地事务出错时，事务管理器负责在事务失败时调度执行补偿逻辑。而补偿逻辑需要业务（程序员）来写，对业务的侵入性比较大。")]),_._v(" "),t("p",[_._v("  每个接口需要写两个逻辑，一个正向，一个逆向，导致业务量增大，因此许多人不愿意用。")]),_._v(" "),t("p",[_._v("  虽然有事务管理器负责调度补偿逻辑，那如果调度补偿逻辑超时怎么办？超时就会重试，如果就是因为处理的慢一些而超时，由于重试可能导致数据不一致，因此这个补偿逻辑还要"),t("strong",[_._v("保障接口的幂等性")]),_._v("，业务量会更大。")]),_._v(" "),t("p",[_._v("  原理是 当开启一个分布式事务时，会申请一个全局事务id，子事务在执行时将本地事务id注册到事务管理器。不必一定要恢复到事务之前的状态。因此可以通过异步补偿的方式，来降级接口（正常执行 + 补偿）的响应时间。sagas架构设计三大关键技术，（1）记录请求调用链路。（2）异步补偿机制。（3）幂等补偿接口。")]),_._v(" "),t("h2",{attrs:{id:"事务消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务消息"}},[_._v("#")]),_._v(" 事务消息")]),_._v(" "),t("p",[_._v("  事务消息简化了分布式事务模型，对业务友好，几乎无侵入。将"),t("code",[_._v("两次RPC")]),_._v("转成了"),t("code",[_._v("一次RPC + 一个消息的写入")]),_._v("。")]),_._v(" "),t("p",[_._v("  分布式事务解决了多个数据源的写入的原子性问题。事务消息解决了业务方与发送消息的原子性问题，没有保证后续的接收方处理有没有成功，因此模型简单了。")]),_._v(" "),t("h3",{attrs:{id:"rocketmq-事务消息-两阶段提交方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-事务消息-两阶段提交方案"}},[_._v("#")]),_._v(" RocketMQ 事务消息 两阶段提交方案")]),_._v(" "),t("p",[_._v("  （1）消息发送方，发送一条 prepare消息 到 MQ Server。")]),_._v(" "),t("p",[_._v("  （2）MQ Server响应发送成功到 消息发送方。")]),_._v(" "),t("p",[_._v("  （3）消息发送方执行本地事务，发送COMMIT/rollback消息到MQ Server。")]),_._v(" "),t("p",[_._v("  （4）MQ Server长时间未收到消息，就会回查本地事务的结果。")]),_._v(" "),t("p",[_._v("  （5）MQ Server接收到消息，处理 prepare消息，是投递还是丢弃。")]),_._v(" "),t("p",[_._v("  问题。业务方需要提供回查接口，对业务侵入比较大。只有特定的MQ支持两阶段提交。")]),_._v(" "),t("h3",{attrs:{id:"通用设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用设计"}},[_._v("#")]),_._v(" 通用设计")]),_._v(" "),t("p",[t("strong",[_._v("1、保证消息发送方的成功发送")])]),_._v(" "),t("p",[_._v("  消息发送方，维护一张消息表，与业务表放在同一本地事务中执行。后台启动一个线程，定时扫描消息表的数据投递到MQ服务端，MQ服务端响应ACK到消息发送方，更新消息表的发送状态。确保消息投放稳定。如果长时间收不到MQ服务端的ack消息，在下一轮定时任务到时，会出现发送重复消息的情况。MQ服务端最少会持有一份数据的消息。")]),_._v(" "),t("p",[t("strong",[_._v("2、保证消息接收方的成功处理")])]),_._v(" "),t("p",[_._v("  消息接收方，需要确保接口的幂等性。")]),_._v(" "),t("p",[_._v("  消息接收方通常会部署多个，MQ服务端也可能同时收到同一条消息多次。在同一时间可能有多个消息接收方"),t("strong",[_._v("并行处理同一条消息")]),_._v("。此时就需要判断消息接收方的业务逻辑，如果影响的数据量是一定的，比如删除一次和删除多次的效果是等价的，因为删除操作天然是幂等性的，也不需要做去重处理。而如果是插入操作，要保证只能执行一次，丢弃其他的执行，可以通过分布式锁的方式来保证执行的唯一性。")]),_._v(" "),t("p",[_._v("  使用事务消息的异步场景下，如果消息接收方是无状态化的，可以通过横向拓展来大大提升吞吐量。MQ服务端也可以通过搭建集群，也加大吞吐量。响应延时由于中间的节点增多而加大，通过加机器的方式来保证延迟在可接收范围之内。")]),_._v(" "),t("h2",{attrs:{id:"seata框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seata框架"}},[_._v("#")]),_._v(" seata框架")]),_._v(" "),t("img",{attrs:{src:"/分布式/04_seata.png",width:"560px"}}),_._v(" "),t("p",[t("strong",[_._v("1、流程")])]),_._v(" "),t("p",[_._v("  （1）TM向TC 申请开启一个全局事务，TC创建全局事务后返回唯一的全局XID。XID会在全局事务的上下文中传播。")]),_._v(" "),t("p",[_._v("  （2）RM向TC注册分支事务，该分支事务归属于拥有相同XID的全局事务。")]),_._v(" "),t("p",[_._v("  （3）TM向TC发起全局提交或回滚。")]),_._v(" "),t("p",[_._v("  （4）TC调度XID下的分支事务完成提交或者回滚。")]),_._v(" "),t("h3",{attrs:{id:"at模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#at模式"}},[_._v("#")]),_._v(" AT模式")]),_._v(" "),t("p",[_._v("  AT模式是一种无侵入的分布式事务解决方案，2PC的广义实现，可以应对大多数的业务场景。其特点是："),t("strong",[_._v("低成本")]),_._v("，编程模型不变，轻依赖不需要为分布式事务场景做特定设计。"),t("strong",[_._v("高性能")]),_._v("，一阶段提交，不阻塞；连接释放，保证整个系统的吞吐量。"),t("strong",[_._v("高可用")]),_._v("，在极端的异常情况下，可以暂时跳过异常事务，保证系统可用，需要人工介入。")]),_._v(" "),t("p",[_._v("  TCC、SAGA、AT模式在第一阶段就提交了，"),t("strong",[_._v("既然提交就不阻塞，连接释放，保证系统的吞吐量")]),_._v("。")]),_._v(" "),t("p",[_._v("  XA为什么慢呢？不只有锁的问题，还有数据库连接的问题。当我们的服务访问数据库时，线程是独占连接的，只要事务不提交，线程就会一直持有连接，其他线程用不了。如果有许多的分布式事务在执行，连接都被线程占用着，其他工作连接就拿不到连接用了，就影响了吞吐量。")]),_._v(" "),t("h3",{attrs:{id:"执行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行原理"}},[_._v("#")]),_._v(" 执行原理")]),_._v(" "),t("p",[_._v("  业务通过RM去访问数据库，在第一阶段，RM拦截业务SQL，生成前镜像（执行业务之前的数据，业务回滚可以用前镜像恢复），生成后镜像，这些内容记录在undo_log中。在第二阶段，TC向所有的RM发起提交或者回滚。")]),_._v(" "),t("p",[_._v("  二阶段如何"),t("strong",[_._v("提交分布式事务")]),_._v("，删除记录的undo_log即可。具体的业务本地事务在第一阶段已经提交了。")]),_._v(" "),t("p",[_._v("  二阶段如何"),t("strong",[_._v("回滚分布式事务")]),_._v("，说是叫回滚，其实是基于undo_log里的前镜像做逆向操作。")]),_._v(" "),t("p",[t("strong",[_._v("1、如何回滚？")])]),_._v(" "),t("p",[_._v("  要防止其他事务对数据的修改，比如其他分布式事务的修改，和非分布式事务的修改。")]),_._v(" "),t("p",[_._v("  比如分布式事务A的分支事务A1，修改了用户的钱数为100，记录前镜像为50，记录后镜像为100。此时分布式事务B来了，修改了用户的钱数为200，记录前镜像为100，后镜像为200。")]),_._v(" "),t("p",[_._v("  如果分布式事务A需要进行回滚，那将钱数回滚为50吗？明显是不对的！因此要注意其他分布式事务的修改，也要注意非分布式事务的修改，比如商家增加商品的库存为1000，其中一个分布式事务给回滚成10了。")]),_._v(" "),t("p",[_._v("  在本地事务中的行锁就起了至关重要的作用。而业务已经在第一阶段提交了，行锁被释放就无法锁住资源，因为要使用分布式事务特殊的行锁（分布式锁）。")]),_._v(" "),t("p",[t("strong",[_._v("2、回滚逻辑")])]),_._v(" "),t("p",[_._v("  （1）校验脏写。回滚时通过undo_log获取后镜像，再查一下当前数据的最新数据。当后镜像与最新数据不同时，代表分布式事务期间数据被其他事务修改了，这就是"),t("strong",[_._v("脏写")]),_._v("，不能直接基于前镜像进行回滚了。校验出脏写了，就需要人工介入恢复。")]),_._v(" "),t("p",[_._v("  （2）如果校验脏写通过了，根据前后镜像生成逆向SQL还原数据。")]),_._v(" "),t("p",[_._v("  （3）删除前后镜像。")]),_._v(" "),t("p",[t("strong",[_._v("3、如何防止脏写")])]),_._v(" "),t("p",[_._v("  用户下单减库存，将库存扣减这个事情通过分布式锁锁住，每个下单都是独立的分布式事务，都有不同的XID，只要在seata框架下管理的分布式事务遵循同样的分布式锁的规则就可以了。")]),_._v(" "),t("p",[_._v("  商家增加库存这种非分布式事务，不受seata管理，有可能会发生脏写。有个注解"),t("code",[_._v("@GlobalLock")]),_._v("，对这个事务所作的操作同样去访问分布式锁。")]),_._v(" "),t("p",[_._v("  如果脏写发生了，只能通过人工介入。")]),_._v(" "),t("p",[_._v("  如果不检查全局锁（分布式锁），锁失效。")]),_._v(" "),t("h3",{attrs:{id:"隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[_._v("#")]),_._v(" 隔离级别")]),_._v(" "),t("p",[_._v("  分布式事务的隔离级别，比如saga、TCC在第一阶段就提交了，因此默认为读未提交。")]),_._v(" "),t("p",[_._v("  seata的写隔离。分支事务提交前拿到全局锁，在分布式事务提交时释放全局锁。")]),_._v(" "),t("p",[_._v("  分布式事务A拿到了全局锁，需要回滚，等待行锁。分布式事务B拿到了行锁，等待全局锁，这就产生了死锁。有一个约定是拿全局锁超时，回滚本地事务，释放本地锁，那就回滚分布式事务B。")]),_._v(" "),t("p",[_._v("  seata的读隔离。默认全局隔离级别是读未提交。如何做到读已提交呢？查询时使用"),t("code",[_._v("select for update")]),_._v("实现读已提交，在查询时需要获取全局锁，再有其他分布式事务未提交时，查询数据时阻塞读不出数据来实现读已提交。")])])}),[],!1,null,null,null);v.default=r.exports}}]);