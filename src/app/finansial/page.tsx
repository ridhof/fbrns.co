
import { IframeLayoutFullScreen } from "../components"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formulir Program Bantuan Finansial oleh social@fbrns.co',
  description: 'Program Bantuan Finansial berawal dari kepedulian pribadi terhadap akses pendidikan dan kesehatan yang kian mahal sehingga semakin sulit untuk dijangkau bagi sebagian orang. Tidak terjangkaunya akses pendidikan dan kesehatan dapat membuat sebagian orang mulai menyampingkan persoalan ini, karena harus mengutamakan kebutuhan hidup sehari-hari yang kian mahal.',
}


export default function Finansial() {
    return (
        <IframeLayoutFullScreen />
    );
}