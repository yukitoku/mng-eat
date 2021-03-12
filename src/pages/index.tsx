import Head from 'next/head'
import { Card, Container, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
         <Container>
           <CardGroup>
             <Card>
              <Card.Body>
              <Card.Title>
                <h3>食事登録</h3>
              </Card.Title>
                肉
              </Card.Body>
             </Card>
             <Card>
             <Card.Body>
              <Card.Title>
              <h3>今日の栄養</h3>
              </Card.Title>
                肉
              </Card.Body>
            </Card>
            <Card>
             <Card.Body>
              <Card.Title>
              <h3>食品登録</h3>
              </Card.Title>
                肉
              </Card.Body>
            </Card>
           </CardGroup>
         </Container>
       </main>
        

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
