import { withRouter } from 'next/router'
import Comp from '../components/comp'
import Head from 'next/head'
import Link from 'next/link'

const A = ({ router, name }) => (
    <>
        <Link href="#aaa">
            <a className="link">{router.query.id}-{name}</a>
        </Link>
        <style jsx>
            {`
                a {
                    color: blue;
                }
                .link {
                    color: red;
                }
            `}
        </style>
    </>
)

A.getInitialProps = async (ctx) => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'ghb'
            })
        }, 1000)
    })

    return await promise
}
export default withRouter(A)