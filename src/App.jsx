import './App.css'
import Button from './components/button.jsx';
import Product from './components/product.jsx';
import bag1Image from './assets/bag_1.png'
import bag2Image from './assets/bag_2.png'
import bag3Image from './assets/bag_3.png'
import bag4Image from './assets/bag_4.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonName="to the collection"
                    log="button collection is clicked"
                />
                <Button
                    buttonName="to the collection"
                    log="button all bags is clicked"
                />
                <Button
                    buttonName="pre-order"
                    log="button collection is clicked"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    redlabel="Best seller"
                    bagImage = {bag1Image}
                    typeBag = "The handy bag"
                    price ="€400,-"
                />
                 <Product
                    redlabel="Best seller"
                    bagImage = {bag2Image}
                    typeBag = "The stylish bag"
                    price ="250,-"
                />
                <Product
                    redlabel="New collection"
                    bagImage = {bag3Image}
                    typeBag = "The simple bag"
                    price ="300,-"
                />
                <Product
                    redlabel="New collection"
                    bagImage = {bag4Image}
                    typeBag = "The trandy bag"
                    price ="150,-"
                />




            </main>


        </>
    )
}

export default App
