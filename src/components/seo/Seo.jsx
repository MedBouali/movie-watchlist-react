import { Helmet } from "react-helmet-async"

function Seo({ title, description }) {
    const siteName = "WatchWise"

    return (
        <Helmet>
            <title>
                {title ? `${title} | ${siteName}` : siteName}
            </title>

            {description && (
                <meta name="description" content={description} />
            )}
        </Helmet>
    )
}

export default Seo