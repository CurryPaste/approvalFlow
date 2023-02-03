
/** FormControls */
import Amount from '@/components/FormControls/Amount'
import Calculation from '@/components/FormControls/Calculation'
import TimeDuration from '@/components/FormControls/TimeDuration'
import DateDuration from '@/components/FormControls/DateDuration'
import OrgTransfer from '@/components/FormControls/OrgTransfer'
import OrgSelect from '@/components/FormControls/OrgSelect'
import InputTable from '@/components/FormControls/InputTable'
/** FormControls */
// TODO: 醉了，还不能用混入，只能一个个的引入
export default {
    components: {
        fcAmount: Amount,
        fcCalculation: Calculation,
        fcTimeDuration: TimeDuration,
        fcDateDuration: DateDuration,
        fcOrgTransfer: OrgTransfer,
        fcOrgSelect: OrgSelect,
        fcInputTable: InputTable,
    }
}