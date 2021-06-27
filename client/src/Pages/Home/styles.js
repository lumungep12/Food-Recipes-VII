import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	home: {
		marginTop: "5rem",
		width: "100%",
		height: "78vh",
		background:
			"url('https://mcdn.wallpapersafari.com/medium/98/56/8EfrVP.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	overlay: {
		position: "relative",
		zIndex: "999",
		background: "rgba(0,0,0,0.7)",
		width: "100%",
		height: "100%",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
}));
