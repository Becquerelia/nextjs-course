import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout title={'NewsApp'}>
      <div>        
        <h1>Learning NextJS</h1>
        <Link href="/about">Ir a About</Link>
        {/* <button onClick={()=>router.push('/article/2')} > Navegar de forma programática a un artículo </button>
            La navegación programática está bien para dar una respuesta al usuario, por ejemplo en el caso de los botones de envío de formularios, pero no para navegar entre vistas. */}
      </div>
    </PageLayout>
  );
}
