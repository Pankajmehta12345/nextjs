import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css';
import Head from "next/head";

const ProductListing = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("store", "en_us");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "PHPSESSID=3djegti9v08e3sgg8m8v7m9mmg; mage-messages=%5B%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%2C%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%2C%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%2C%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%2C%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%5D; private_content_version=9fd21e932bfc0661768908f6c9f1ec00; redirect_value=en_de");
        var graphql = JSON.stringify({
            query: `query
            {
                ($category_id:ID!)
                {fsyncHomeSlider(category_id: $category_id)
                    {
                      banner_title{
                        title
                        link_label
                        link_url
                      }
                      homeSliderSlides{
                        id
                        title
                        subtitle
                        image_mobile
                        image
                        type
                        price
                        url_text
                        url
                        store_id
                      }
                    }
                }
            }
          `,
            variables: { "category_id": 3 }
        })

        var requestOptions = {
            method: 'POST',
            body: graphql,
            redirect: 'follow',
            headers:myHeaders,
        };

        const response = await fetch("https://pwa.hypernode.frontrunneroutfitters.com/graphql", requestOptions);
        const data = await response.json()
        console.log(data)
    };

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>

                    <div className={styles.grid}>
                        {/* {data?.data?.countries?.slice(0, 20).map((country) => (
                            <div key={country.code} className={styles.card}>
                                <h3>{country.name}</h3>
                                <p>
                                    {country.code} - {country.emoji}
                                </p>
                            </div>
                        ))} */}
                    </div>
                </main>

            </div>
        </>
    )
}

export default ProductListing;