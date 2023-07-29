import { redirect } from 'next/navigation'

export default function Resume() {
    return redirect('/assets/resume.pdf');
}