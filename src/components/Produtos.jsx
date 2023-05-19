import styled from "styled-components"
import logoDoti from "../assets/logoDoti.png"
import { RightCircleOutlined } from "@ant-design/icons";


export default function Produtos(props) {
    let logoProduto = props.logoProduto;
    let textoProduto = props.textoProduto;
    return (
        <div>
            <div>
                <div> 
                <img src={logoProduto} alt="logoProduto" />
                </div>
                <div>
                <h2>  </h2>
                <RightCircleOutlined className="seta"/>
                </div>
            </div>
        </div>
    )

}
