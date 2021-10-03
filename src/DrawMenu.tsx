import { Dropdown, Menu } from 'antd';
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import { FaUndoAlt } from "react-icons/fa";
import { BiPencil, BiEraser } from "react-icons/bi";
import ColorPicker from "react-pick-color";
import styled from "styled-components";

const DrawMenuComponent = styled.div`
  display: flex;
  justify-content: space-around; 
  padding: 20px 0;
  height: 65px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
`;

interface Props {
  color: string;
  changeColor: (color: string) => void;
  width: number;
  tool: "pen" | "eraser";
  changePen: (width: number) => void;
  changeEraser: (width: number) => void;
  undo: () => void;
}

const itemStyle = {
  "fontSize": "20px",
  "padding": "15px 30px"
}

const renderColorPicker = (color: string, changeColor: (color: string) => void) => (
  <div style={{"touchAction": "none"}}>
    <ColorPicker 
      color={color} 
      onChange={(color) => changeColor(color.hex)} hideInputs={true} hideAlpha={true} 
    />
  </div>
);

const renderPenMenu = (width: number, color: string, changePen: (width: number) => void) => {
  return(
    <Menu onClick={({key}) => changePen(Number(key))} selectedKeys={[String(width)]}>
      <Menu.Item key="2" style={{...itemStyle}} icon={<BsFillCircleFill style={{"fontSize": "2px", "color": color}}/>}>
        2.0
      </Menu.Item>
      <Menu.Item key="5" style={{...itemStyle}} icon={<BsFillCircleFill style={{"fontSize": "5px", "color": color}}/>}>
        5.0
      </Menu.Item>
      <Menu.Item key="10" style={{...itemStyle}} icon={<BsFillCircleFill style={{"fontSize": "10px", "color": color}}/>}>
        10.0
      </Menu.Item>
    </Menu>
  )
};

const renderEraserMenu = (width: number, changeEraser: (width: number) => void) => {
  return(
    <Menu onClick={({key}) => changeEraser(Number(key))} selectedKeys={[String(width)]}>
      <Menu.Item key="2" style={{...itemStyle}} icon={<BsCircle style={{"fontSize": "2px"}}/>}>
        2.0
      </Menu.Item>
      <Menu.Item key="5" style={{...itemStyle}} icon={<BsCircle style={{"fontSize": "5px"}}/>}>
        5.0
      </Menu.Item>
      <Menu.Item key="10" style={{...itemStyle}} icon={<BsCircle style={{"fontSize": "10px"}}/>}>
        10.0
      </Menu.Item>
    </Menu>
  )
};

const DrawMenu = (props: Props) => {
  return(
    <DrawMenuComponent>
      <Dropdown overlay={renderPenMenu(props.width, props.color, props.changePen)} trigger={["click"]} placement="topCenter">
        <BiPencil className="icon" style={{"fontSize": "30px"}}/>
      </Dropdown>
      <Dropdown overlay={renderEraserMenu(props.width, props.changeEraser)} trigger={['click']} placement="topCenter">
        <BiEraser style={{"fontSize": "30px"}}/>
      </Dropdown>
      <Dropdown overlay={renderColorPicker(props.color, props.changeColor)} trigger={['click']} placement="topCenter">
        <BsFillCircleFill style={{"fontSize": "30px", "color": props.color}}/>
      </Dropdown>
      <FaUndoAlt style={{"fontSize": "30px"}} onClick={props.undo}/> 
    </DrawMenuComponent>
  )
};

export default DrawMenu;