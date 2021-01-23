import Head from "next/head";
import DealCard from "../components/DealCard";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
export default function Home() {

    return (
        <div className="px-5">
            <Head>
                <title>Sklep</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*<NavigationBar onMenuOpen={() => {}}>*/}
            {/*    <LinkList direction="row">*/}
            {/*        <TextLink> Link 1 </TextLink>*/}
            {/*        <TextLink> Link 2 </TextLink>*/}
            {/*        <TextLink> Link 3 </TextLink>*/}
            {/*    </LinkList>*/}
            {/*</NavigationBar>*/}
            <div className="mb-3 my-16">
                <h1 className="text-3xl font-bold">Sklep</h1>
            </div>
            <DealCard/>
        </div>
    );
}
