"use client"
import { useQuery, gql } from "@apollo/client";

export const getPageData = () => {
    const PAGE_QUERY = gql`
    {
        allPages {
            docs {
            author {
                id
                firstName
                email
            }
            components
            id
            metaDescription
            path
            slug
            status
            title
            }
        }
    }
    `;
    const { data, loading, error } = useQuery(PAGE_QUERY);
    return data;
}