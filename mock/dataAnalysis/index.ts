import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
// 财务台账
function clientList() {
  return {
    result: [
      {
        id: 1,
        name: '项目一',
      },
      {
        id: 2,
        name: '项目二',
      },
      {
        id: 3,
        name: '项目三',
      },
      {
        id: 4,
        name: '项目四',
      },
    ],
  };
}
// 租赁台账
function leaseList() {
  return {
    resultlease: [
      {
        id: 1,
        name: '项目一',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
      {
        id: 2,
        name: '项目二',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
      {
        id: 3,
        name: '项目三',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
      {
        id: 4,
        name: '项目四',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
      {
        id: 5,
        name: '项目五',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
      {
        id: 6,
        name: '项目六',
        Projectaddress: '湖北省武汉市xxx区xxxxxx',
        Occupancyrate: 'xx.xx%（已出租面积÷项目所有房间累计的可租面积）',
        Surrenderrate: 'xx.xx%（退租完成面积÷项目所有房间累计的可租面积）',
        Newcontractedarea: '15000㎡（筛选时间段内的审核通过新签房间面积）',
        Newleaserenewalarea: '1500㎡（筛选时间段内的审核通过续签房间面积',
        Newleasedarea: '1500㎡（筛选时间段内的审核通过退租房间面积）',
      },
    ],
  };
}
//租赁room
function leaseListroom() {
  return {
    resultleaseroom: [
      {
        id: 1,
        name: '项目一',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '450',
        Availability: '已租赁',
        customer: '客户1',
        brand: '-',
        Contractarea: '450',
        Dateofcontract: '2023.01.01',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '026.12.31',
        lease: '3',
        Rentfreeperiod: '',
        Deposit: '押三付三',
        Performancebonds: '15000',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '员工1',
        Cognitivepathways: '渠道1',
        Industry: '行业1',
        remark: '',
      },
      {
        id: 2,
        name: '项目二',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '450',
        Availability: '已租赁',
        customer: '客户1',
        brand: '-',
        Contractarea: '450',
        Dateofcontract: '2023.01.01',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '026.12.31',
        lease: '3',
        Rentfreeperiod: '',
        Deposit: '押三付三',
        Performancebonds: '15000',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '员工1',
        Cognitivepathways: '渠道1',
        Industry: '行业1',
        remark: '',
      },
      {
        id: 3,
        name: '项目三',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '0',
        Availability: '空置',
        customer: '-',
        brand: '-',
        Contractarea: '-',
        Dateofcontract: '-',
        Contractstartdate: '-',
        Contractexpirationdate: '-',
        lease: '-',
        Rentfreeperiod: '-',
        Deposit: '-',
        Performancebonds: '-',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '-',
        Cognitivepathways: '-',
        Industry: '-',
        remark: '',
      },
      {
        id: 4,
        name: '项目四',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '450',
        Availability: '已租赁',
        customer: '客户1',
        brand: '-',
        Contractarea: '450',
        Dateofcontract: '2023.01.01',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '026.12.31',
        lease: '3',
        Rentfreeperiod: '',
        Deposit: '押三付三',
        Performancebonds: '15000',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '员工1',
        Cognitivepathways: '渠道1',
        Industry: '行业1',
        remark: '',
      },
      {
        id: 5,
        name: '项目五',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '0',
        Availability: '空置',
        customer: '-',
        brand: '-',
        Contractarea: '-',
        Dateofcontract: '-',
        Contractstartdate: '-',
        Contractexpirationdate: '-',
        lease: '-',
        Rentfreeperiod: '-',
        Deposit: '-',
        Performancebonds: '-',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '-',
        Cognitivepathways: '-',
        Industry: '-',
        remark: '',
      },
      {
        id: 6,
        name: '项目六',
        bystages: '1期',
        buildings: 'A栋',
        Layernumber: '1',
        room: '101',
        Measuredarea: '500',
        Rentablearea: '450',
        Leasedarea: '450',
        Availability: '已租赁',
        customer: '客户1',
        brand: '-',
        Contractarea: '450',
        Dateofcontract: '2023.01.01',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '026.12.31',
        lease: '3',
        Rentfreeperiod: '',
        Deposit: '押三付三',
        Performancebonds: '15000',
        ContractedUnitPrice: '-',
        Investmentpersonnel: '员工1',
        Cognitivepathways: '渠道1',
        Industry: '行业1',
        remark: '',
      },
    ],
  };
}
// 欠租欠款
function outstanList() {
  return {
    outstanresult: [
      {
        id: 1,
        name: '项目一',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户1',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
      {
        id: 2,
        name: '项目二',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户2',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
      {
        id: 3,
        name: '项目三',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户3',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
      {
        id: 4,
        name: '项目四',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户4',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
      {
        id: 5,
        name: '项目五',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户5',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
      {
        id: 6,
        name: '项目六',
        room: '湖北省武汉市xxx区xxxxxx',
        customer: '客户6',
        Contractarea: '500',
        Contractstartdate: '2023.01.01',
        Contractexpirationdate: '2026.12.31',
        deposit: '200000',
      },
    ],
  };
}
// 招商数据报表
function investmentList() {
  return {
    investmentresult: [
      {
        id: 1,
        name: '项目一',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
      {
        id: 2,
        name: '项目二',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
      {
        id: 3,
        name: '项目三',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
      {
        id: 4,
        name: '项目四',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
      {
        id: 5,
        name: '项目五',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
      {
        id: 6,
        name: '项目六',
        Leasedarea: '5000',
        Leaserepayment: '5000',
        Percentage: 'xxx%',
      },
    ],
  };
}
// 自持出租率
function OccupancyList() {
  return {
    Occupancyresult: [
      {
        id: 1,
        name: '项目一',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
      {
        id: 2,
        name: '项目二',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
      {
        id: 3,
        name: '项目三',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
      {
        id: 4,
        name: '项目四',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
      {
        id: 5,
        name: '项目五',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
      {
        id: 6,
        name: '项目六',
        Rentablearea: '50000',
        Occupancytarget: 'xx.xx%',
        RentalAreaTarget: 'xxxx',
        Cumulativeleasedarea: 'xx.xx%',
        Occupancyrate: 'xxxx',
        Comparemonth: 'xx.xx',
        Rentalareagap: '1000',
      },
    ],
  };
}
//招商客户画像
function InvestmentCustome() {
  return {
    investmentpage: [
      {
        mouth: '1月',
        add: '58',
        visit: '44',
        name: 'name1',
        add2: '58',
        visit2: '44',
        name2: 'name1',
        add3: '58',
        visit3: '44',
        name3: 'name1',
        add4: '58',
        visit4: '44',
        name4: 'name1',
        add5: '58',
        visit5: '44',
        name5: 'name1',
        add6: '58',
        visit6: '44',
        name6: 'name1',
        add7: '58',
        visit7: '44',
        name7: 'name1',
        add8: '58',
        visit8: '44',
        name8: 'name1',
        add9: '58',
        visit9: '44',
        name9: 'name1',
        add10: '58',
        visit10: '44',
        name10: 'name1',
      },
      {
        mouth: '2月',
        add: '36',
        visit: '27',
        name: 'name1',
        add2: '36',
        visit2: '27',
        name2: 'name1',
        add3: '36',
        visit3: '27',
        name3: 'name1',
        add4: '36',
        visit4: '27',
        name4: 'name1',
        add5: '36',
        visit5: '27',
        name5: 'name1',
        add6: '36',
        visit6: '27',
        name6: 'name1',
        add7: '36',
        visit7: '27',
        name7: 'name1',
        add8: '36',
        visit8: '27',
        name8: 'name1',
        add9: '36',
        visit9: '27',
        name9: 'name1',
        add10: '36',
        visit10: '27',
        name10: 'name1',
      },
      {
        mouth: '3月',
        add: '64',
        visit: '37',
        name: 'name1',
        add2: '64',
        visit2: '37',
        name2: 'name1',
        add3: '64',
        visit3: '37',
        name3: 'name1',
        add4: '64',
        visit4: '37',
        name4: 'name1',
        add5: '64',
        visit5: '37',
        name5: 'name1',
        add6: '64',
        visit6: '37',
        name6: 'name1',
        add7: '64',
        visit7: '37',
        name7: 'name1',
        add8: '64',
        visit8: '37',
        name8: 'name1',
        add9: '64',
        visit9: '37',
        name9: 'name1',
        add10: '64',
        visit10: '37',
        name10: 'name1',
      },
      {
        mouth: '总计',
      },
    ],
  };
}
//客户来源渠道
function InvestmentCustomechannel() {
  return {
    investmentpagechannel: [
      {
        mouth1: '1月',
        tj: 'tj',
        jg: '58',
        zj: '44',
        jg1: '58',
        zj1: '44',
        jg2: '58',
        zj2: '44',
        jg3: '58',
        zj3: '44',
        jg4: '58',
        zj4: '44',
        jg5: '58',
        zj5: '44',
        jg6: '58',
        zj6: '44',
      },
      {
        mouth1: '2月',
        tj: 'tj',
        jg: '58',
        zj: '44',
        jg1: '58',
        zj1: '44',
        jg2: '58',
        zj2: '44',
        jg3: '58',
        zj3: '44',
        jg4: '58',
        zj4: '44',
        jg5: '58',
        zj5: '44',
        jg6: '58',
        zj6: '44',
      },
      {
        mouth1: '3月',
        tj: 'tj',
        jg: '58',
        zj: '44',
        jg1: '58',
        zj1: '44',
        jg2: '58',
        zj2: '44',
        jg3: '58',
        zj3: '44',
        jg4: '58',
        zj4: '44',
        jg5: '58',
        zj5: '44',
        jg6: '58',
        zj6: '44',
      },
    ],
  };
}
//客户意向级别
function InvestmentCustomelevel() {
  return {
    investmentpagelevel: [
      {
        mouth2: '1月',
        lei: '58',
        lei1: '58',
        lei2: '58',
        lei3: '58',
        lei4: '58',
      },
      {
        mouth2: '2月',
        lei: '42',
        lei1: '42',
        lei2: '42',
        lei3: '42',
        lei4: '42',
      },
      {
        mouth2: '3月',
        lei: '33',
        lei1: '33',
        lei2: '33',
        lei3: '33',
        lei4: '33',
      },
      {
        mouth2: '总计',
        lei: 'xxx',
        lei1: 'xxx',
        lei2: 'xxx',
        lei3: 'xxx',
        lei4: 'xxx',
      },
    ],
  };
}
//行业成交客户数
function InvestmentCustomeindustry() {
  return {
    investmentpageindustry: [
      {
        mouth3: '1月',
        industry: '58',
        industry2: '58',
        industry3: '58',
        industry4: '58',
        industry5: '58',
        industry6: '58',
        industry7: '58',
        industry8: '58',
        industry9: '58',
        industry10: '58',
      },
      {
        mouth3: '2月',
        industry: '42',
        industry2: '42',
        industry3: '42',
        industry4: '42',
        industry5: '42',
        industry6: '42',
        industry7: '42',
        industry8: '42',
        industry9: '42',
        industry10: '42',
      },
      {
        mouth3: '3月',
        industry: '33',
        industry2: '33',
        industry3: '33',
        industry4: '33',
        industry5: '33',
        industry6: '33',
        industry7: '33',
        industry8: '33',
        industry9: '33',
        industry10: '33',
      },
      {
        mouth3: '总计',
        industry: 'xxx',
        industry2: 'xxx',
        industry3: 'xxx',
        industry4: 'xxx',
        industry5: 'xxx',
        industry6: 'xxx',
        industry7: 'xxx',
        industry8: 'xxx',
        industry9: 'xxx',
        industry10: 'xxx',
      },
    ],
  };
}
//客户成交周期
function InvestmentCustomecycle() {
  return {
    investmentpagecycle: [
      {
        item: '项目1',
        zu: '2',
        mi: '499',
        wb: '2',
        wb1: '',
        wb2: '',
        wb3: '',
        wb4: '',
        wb5: '',
      },
      {
        item: '项目2',
        zu: '2',
        mi: '599',
        wb: '2',
        wb1: '',
        wb2: '',
        wb3: '',
        wb4: '',
        wb5: '',
      },
      {
        item: '项目3',
        zu: '2',
        mi: '1399',
        wb: '1',
        wb1: '',
        wb2: '1',
        wb3: '',
        wb4: '',
        wb5: '',
      },
      {
        item: '项目4',
        zu: '2',
        mi: '2499',
        wb: '1',
        wb1: '',
        wb2: '',
        wb3: '',
        wb4: '1',
        wb5: '',
      },
    ],
  };
}
export default [
  {
    url: '/basic-api/dataAnalysis',
    timeout: 200,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        ...clientList(),
        ...leaseList(),
        ...leaseListroom(),
        ...outstanList(),
        ...investmentList(),
        ...InvestmentCustome(),
        ...InvestmentCustomechannel(),
        ...InvestmentCustomelevel(),
        ...InvestmentCustomeindustry(),
        ...InvestmentCustomecycle(),
        ...OccupancyList(),
      }); //存在异常 // return resultError(“出现问题”);
    },
  }, // mock user login
] as MockMethod[];
