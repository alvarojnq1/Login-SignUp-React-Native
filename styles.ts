import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%', // Equivalente a w-full
    height: '100%', // Equivalente a h-full
  },
  imagetop: {
    position: 'absolute',
    width: '100%', // Equivalente a w-full
    height: '100%', // Equivalente a h-full
  },
  lightview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  light1: {
    height: 225,
    width: 90,
  },
  light2: {
    height: 160,
    width: 65,
  },
  containerTitleAndForm: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 60,
    top: 180,
  },
  innerContainerTitleAndForm: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 40, // Aproximadamente equivalente a text-5xl
    fontWeight: 'bold', // Equivalente a font-bold
    letterSpacing: 1.5, // Aproximadamente equivalente a tracking-wider
    color: '#fff', // Equivalente a text-white
  },
  formsContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  forms: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 8,
    borderRadius: 20,
    width: '100%',
    marginBottom: 16,
  },
  viewButton: {
    width: '100%',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#38bdf8',
    padding: 8,
    borderRadius: 20,
    marginBottom: 12,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupTxt: {
    color: '#0284c7',
  },
});

export default styles;
