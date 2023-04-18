import useNavigation from "../hooks/useNavigation";

function Route({ path, content }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return content;
  }

  return null;
}

export default Route;
