import { SafeAreaView } from "react-native";
import LoginForm from "./pages/LoginForm";
import FlatListDemo from "./pages/FlatListDemo";
import GridDemo from "./pages/GridDemo";
import SectionListDemo from "./pages/SectionListDemo";
import ClassBaseComp from "./pages/ClassBaseComp";
import LifeCycle from "./pages/LifeCycle";
import ResponsiveLayout from "./pages/ResponsiveLayout";
import LoaderComponent from "./pages/LoaderComponent";
import ModalComponent from "./pages/ModalComponent";
import StatusBarDemo from "./pages/StatusBarDemo";
import PlatformDemo from "./pages/PlatformDemo";
import WebViewDemo from "./pages/WebViewDemo";
import StackNavigationDemo from "./pages/StackNavigationDemo";
import TabNavigationDemo from "./pages/TabNavigationDemo";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LoginForm /> */}
      {/* <FlatListDemo /> */}
      {/* <GridDemo /> */}
      {/* <SectionListDemo /> */}
      {/* <ClassBaseComp /> */}
      {/* <LifeCycle /> */}
      {/* <ResponsiveLayout /> */}
      {/* <LoaderComponent /> */}
      {/* <ModalComponent /> */}
      {/* <StatusBarDemo /> */}
      {/* <PlatformDemo /> */}
      {/* <WebViewDemo /> */}
      {/* <StackNavigationDemo /> */}
      <TabNavigationDemo />
    </SafeAreaView>
  );
};

export default App;
