import { PageLayout } from '@/components/Pagelayout/PageLayout'
import { User } from "@/components/User/user"
import { InterfaceUser } from "@/components/User/userButtons"

export default function UserUI () {
    return (
        <PageLayout title='HIS - User'>
            <User />
            <InterfaceUser />
        </PageLayout>
    )
}