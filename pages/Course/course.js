import { PageLayout } from '@/components/Pagelayout/PageLayout';
import { Header } from "@/components/Header/header"
import { Footer } from "@/components/Footer/Footer"
import { LearningProgram } from "@/components/LearningProgram/LearningProgram"

export default function Course () {
    return (
        <PageLayout title='HIS - Learning program'>
            <LearningProgram />
        </PageLayout>
    )
}