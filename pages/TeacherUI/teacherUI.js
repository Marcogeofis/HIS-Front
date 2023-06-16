import { PageLayout } from '@/components/Pagelayout/PageLayout';
import { User } from "@/components/User/user"
import { TeacherButtons } from "@/components/Teacher/teacherButtons"

export default function TeacherUI () {
    return (
        <PageLayout title='HIS - Teacher session'>
            <User />
            <TeacherButtons />
        </PageLayout>
    )
}