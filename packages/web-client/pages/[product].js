import {gql, useQuery} from "@apollo/client";
import Card, {CardSection} from "@kiwicom/orbit-components/lib/Card/index";
import Badge from "@kiwicom/orbit-components/lib/Badge/index";
import Apple from "@kiwicom/orbit-components/lib/icons/Apple";
import Clock from "@kiwicom/orbit-components/lib/icons/Clock";
import Stack from "@kiwicom/orbit-components/lib/Stack/index";
import Text from "@kiwicom/orbit-components/lib/Text/index";

export const PRODUCT_QUERY = gql`
    query product($id: ID!){
        product(id: $id) {id name desc in_stock added_at } 
    }
  `;

export default function Product({product}) {
    const {loading, error, data} = useQuery(PRODUCT_QUERY, {
        variables: {id: product},
    });

    return !loading && data.product === null ? (<Text type="primary">Not a valid ID</Text>
    ) : <div className="my-3">
        {loading ? <div/> : (<div className="my-3">
                <Card title={data.product.name}
                      icon={data.product.in_stock ? <Badge icon={<Apple/>} type="info">Available</Badge> :
                          <Badge icon={<Clock/>} type="warning">Unavailable</Badge>}>
                    <CardSection>
                        <Stack direction="column" spacing="XSmall">
                            <Text type="primary">{data.product.desc}</Text>
                            <Text type="secondary">{new Date(data.product.added_at).toLocaleDateString()}</Text>
                        </Stack>
                    </CardSection>
                </Card>
            </div>
        )}
    </div>
}

Product.getInitialProps = ({query: {product}}) => {
    return {product}
}