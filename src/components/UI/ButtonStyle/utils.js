export const getVariants = (theme, variant) => {
	switch (variant) {
		case 'small':
			return getSmallVariant(theme);
		case 'smallSecond':
			return getSmallVariantSecond(theme);
		case 'large':
			return getLargeVariant(theme);
		case 'largeSecond':
			return getLargeVariantSecond(theme);
		case 'extralarge':
			return getExtralargeVariant(theme);
		case 'extralargeSecond':
			return getExtralargeVariantSecond(theme);
		case 'mediumSecond':
			return getMediumVariantSecond(theme);
		case 'medium':
		default:
			return getMediumVariant(theme);
	}
};

const getSmallVariant = (theme) => ({
	width: theme.spacing(12.5),
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: theme.palette.accent.main,
	},
});
// cambiar fuente
// cambiar hover

const getMediumVariant = (theme) => ({
	width: theme.spacing(18.7),
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: 'grey',
	},
});

const getLargeVariant = (theme) => ({
	width: theme.spacing(25),
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: 'grey',
	},
});

const getExtralargeVariant = (theme) => ({
	width: theme.spacing(31.2),
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: 'grey',
	},
});

// -------- SECONND ----------

const getSmallVariantSecond = (theme) => ({
	width: theme.spacing(12.5),
	backgroundColor: theme.palette.accent.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
});
// cambiar fuente
// cambiar hover

const getMediumVariantSecond = (theme) => ({
	width: theme.spacing(18.7),
	backgroundColor: theme.palette.accent.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: theme.palette.accentSecond.main,
	},
});

const getLargeVariantSecond = (theme) => ({
	width: theme.spacing(25),
	backgroundColor: theme.palette.accent.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: theme.palette.accentSecond.main,
	},
});

const getExtralargeVariantSecond = (theme) => ({
	width: theme.spacing(31.2),
	backgroundColor: theme.palette.accent.main,
	borderRadius: theme.spacing(1.5),
	border: 'none',
	padding: '5px',
	fontFamily: 'Bold',
	'&:hover': {
		backgroundColor: theme.palette.accentSecond.main,
	},
});
