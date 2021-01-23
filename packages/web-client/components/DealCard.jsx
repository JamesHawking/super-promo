import Link from 'next/link';
import Card, {CardSection} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";
import Apple from "@kiwicom/orbit-components/lib/icons/Apple";
import {gql, useQuery} from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
    query {
        products { id name desc in_stock added_at }
    }
  `;

export default function DealCard() {
    const {loading, error, data} = useQuery(ALL_PRODUCTS_QUERY);

    return <div className="my-3">
        {loading ? <div/> : data.products.map(({id, name, desc, in_stock, added_at}) => {
            return (<div className="my-3" key={id}>
                <Card title={<Link href={`/${id}`}>{name}</Link>} icon={in_stock ? <Badge icon={<Apple/>} type="info">Available</Badge> :
                    <Badge icon={<Clock/>} type="warning">Unavailable</Badge>}>
                    <CardSection>
                        <Stack direction="column" spacing="XSmall">
                            <Text type="primary">{desc}</Text>
                            <Text type="secondary">{new Date(added_at).toLocaleDateString()}</Text>
                        </Stack>
                    </CardSection>
                </Card>

            </div>)
        })}

    </div>
}