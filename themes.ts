import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const bengals: CustomThemeConfig = {
	name: 'Bengals',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #fb4f14
		'--color-primary-50': '254 229 220', // #fee5dc
		'--color-primary-100': '254 220 208', // #fedcd0
		'--color-primary-200': '254 211 196', // #fed3c4
		'--color-primary-300': '253 185 161', // #fdb9a1
		'--color-primary-400': '252 132 91', // #fc845b
		'--color-primary-500': '251 79 20', // #fb4f14
		'--color-primary-600': '226 71 18', // #e24712
		'--color-primary-700': '188 59 15', // #bc3b0f
		'--color-primary-800': '151 47 12', // #972f0c
		'--color-primary-900': '123 39 10', // #7b270a
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #fb4f14
		'--color-surface-50': '254 229 220', // #fee5dc
		'--color-surface-100': '254 220 208', // #fedcd0
		'--color-surface-200': '254 211 196', // #fed3c4
		'--color-surface-300': '253 185 161', // #fdb9a1
		'--color-surface-400': '252 132 91', // #fc845b
		'--color-surface-500': '251 79 20', // #fb4f14
		'--color-surface-600': '226 71 18', // #e24712
		'--color-surface-700': '188 59 15', // #bc3b0f
		'--color-surface-800': '151 47 12', // #972f0c
		'--color-surface-900': '123 39 10' // #7b270a
	}
};

export const bills: CustomThemeConfig = {
	name: 'Bills',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #01338d
		'--color-primary-50': '217 224 238', // #d9e0ee
		'--color-primary-100': '204 214 232', // #ccd6e8
		'--color-primary-200': '192 204 227', // #c0cce3
		'--color-primary-300': '153 173 209', // #99add1
		'--color-primary-400': '77 112 175', // #4d70af
		'--color-primary-500': '1 51 141', // #01338d
		'--color-primary-600': '1 46 127', // #012e7f
		'--color-primary-700': '1 38 106', // #01266a
		'--color-primary-800': '1 31 85', // #011f55
		'--color-primary-900': '0 25 69', // #001945
		// secondary | #c70b30
		'--color-secondary-50': '247 218 224', // #f7dae0
		'--color-secondary-100': '244 206 214', // #f4ced6
		'--color-secondary-200': '241 194 203', // #f1c2cb
		'--color-secondary-300': '233 157 172', // #e99dac
		'--color-secondary-400': '216 84 110', // #d8546e
		'--color-secondary-500': '199 11 48', // #c70b30
		'--color-secondary-600': '179 10 43', // #b30a2b
		'--color-secondary-700': '149 8 36', // #950824
		'--color-secondary-800': '119 7 29', // #77071d
		'--color-secondary-900': '98 5 24', // #620518
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #01338d
		'--color-surface-50': '217 224 238', // #d9e0ee
		'--color-surface-100': '204 214 232', // #ccd6e8
		'--color-surface-200': '192 204 227', // #c0cce3
		'--color-surface-300': '153 173 209', // #99add1
		'--color-surface-400': '77 112 175', // #4d70af
		'--color-surface-500': '1 51 141', // #01338d
		'--color-surface-600': '1 46 127', // #012e7f
		'--color-surface-700': '1 38 106', // #01266a
		'--color-surface-800': '1 31 85', // #011f55
		'--color-surface-900': '0 25 69' // #001945
	}
};

export const browns: CustomThemeConfig = {
	name: 'Browns',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #311d00
		'--color-primary-50': '224 221 217', // #e0ddd9
		'--color-primary-100': '214 210 204', // #d6d2cc
		'--color-primary-200': '204 199 191', // #ccc7bf
		'--color-primary-300': '173 165 153', // #ada599
		'--color-primary-400': '111 97 77', // #6f614d
		'--color-primary-500': '49 29 0', // #311d00
		'--color-primary-600': '44 26 0', // #2c1a00
		'--color-primary-700': '37 22 0', // #251600
		'--color-primary-800': '29 17 0', // #1d1100
		'--color-primary-900': '24 14 0', // #180e00
		// secondary | #ff3b00
		'--color-secondary-50': '255 226 217', // #ffe2d9
		'--color-secondary-100': '255 216 204', // #ffd8cc
		'--color-secondary-200': '255 206 191', // #ffcebf
		'--color-secondary-300': '255 177 153', // #ffb199
		'--color-secondary-400': '255 118 77', // #ff764d
		'--color-secondary-500': '255 59 0', // #ff3b00
		'--color-secondary-600': '230 53 0', // #e63500
		'--color-secondary-700': '191 44 0', // #bf2c00
		'--color-secondary-800': '153 35 0', // #992300
		'--color-secondary-900': '125 29 0', // #7d1d00
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #311d00
		'--color-surface-50': '224 221 217', // #e0ddd9
		'--color-surface-100': '214 210 204', // #d6d2cc
		'--color-surface-200': '204 199 191', // #ccc7bf
		'--color-surface-300': '173 165 153', // #ada599
		'--color-surface-400': '111 97 77', // #6f614d
		'--color-surface-500': '49 29 0', // #311d00
		'--color-surface-600': '44 26 0', // #2c1a00
		'--color-surface-700': '37 22 0', // #251600
		'--color-surface-800': '29 17 0', // #1d1100
		'--color-surface-900': '24 14 0' // #180e00
	}
};

export const colts: CustomThemeConfig = {
	name: 'Colts',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #002c5f
		'--color-primary-50': '217 223 231', // #d9dfe7
		'--color-primary-100': '204 213 223', // #ccd5df
		'--color-primary-200': '191 202 215', // #bfcad7
		'--color-primary-300': '153 171 191', // #99abbf
		'--color-primary-400': '77 107 143', // #4d6b8f
		'--color-primary-500': '0 44 95', // #002c5f
		'--color-primary-600': '0 40 86', // #002856
		'--color-primary-700': '0 33 71', // #002147
		'--color-primary-800': '0 26 57', // #001a39
		'--color-primary-900': '0 22 47', // #00162f
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #a1aaad
		'--color-tertiary-50': '241 242 243', // #f1f2f3
		'--color-tertiary-100': '236 238 239', // #eceeef
		'--color-tertiary-200': '232 234 235', // #e8eaeb
		'--color-tertiary-300': '217 221 222', // #d9ddde
		'--color-tertiary-400': '189 196 198', // #bdc4c6
		'--color-tertiary-500': '161 170 173', // #a1aaad
		'--color-tertiary-600': '145 153 156', // #91999c
		'--color-tertiary-700': '121 128 130', // #798082
		'--color-tertiary-800': '97 102 104', // #616668
		'--color-tertiary-900': '79 83 85', // #4f5355
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #002c5f
		'--color-surface-50': '217 223 231', // #d9dfe7
		'--color-surface-100': '204 213 223', // #ccd5df
		'--color-surface-200': '191 202 215', // #bfcad7
		'--color-surface-300': '153 171 191', // #99abbf
		'--color-surface-400': '77 107 143', // #4d6b8f
		'--color-surface-500': '0 44 95', // #002c5f
		'--color-surface-600': '0 40 86', // #002856
		'--color-surface-700': '0 33 71', // #002147
		'--color-surface-800': '0 26 57', // #001a39
		'--color-surface-900': '0 22 47' // #00162f
	}
};

export const dolphins: CustomThemeConfig = {
	name: 'Dolphins',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #008e97
		'--color-primary-50': '217 238 239', // #d9eeef
		'--color-primary-100': '204 232 234', // #cce8ea
		'--color-primary-200': '191 227 229', // #bfe3e5
		'--color-primary-300': '153 210 213', // #99d2d5
		'--color-primary-400': '77 176 182', // #4db0b6
		'--color-primary-500': '0 142 151', // #008e97
		'--color-primary-600': '0 128 136', // #008088
		'--color-primary-700': '0 107 113', // #006b71
		'--color-primary-800': '0 85 91', // #00555b
		'--color-primary-900': '0 70 74', // #00464a
		// secondary | #fc4c01
		'--color-secondary-50': '255 228 217', // #ffe4d9
		'--color-secondary-100': '254 219 204', // #fedbcc
		'--color-secondary-200': '254 210 192', // #fed2c0
		'--color-secondary-300': '254 183 153', // #feb799
		'--color-secondary-400': '253 130 77', // #fd824d
		'--color-secondary-500': '252 76 1', // #fc4c01
		'--color-secondary-600': '227 68 1', // #e34401
		'--color-secondary-700': '189 57 1', // #bd3901
		'--color-secondary-800': '151 46 1', // #972e01
		'--color-secondary-900': '123 37 0', // #7b2500
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #008e97
		'--color-surface-50': '217 238 239', // #d9eeef
		'--color-surface-100': '204 232 234', // #cce8ea
		'--color-surface-200': '191 227 229', // #bfe3e5
		'--color-surface-300': '153 210 213', // #99d2d5
		'--color-surface-400': '77 176 182', // #4db0b6
		'--color-surface-500': '0 142 151', // #008e97
		'--color-surface-600': '0 128 136', // #008088
		'--color-surface-700': '0 107 113', // #006b71
		'--color-surface-800': '0 85 91', // #00555b
		'--color-surface-900': '0 70 74' // #00464a
	}
};

export const jets: CustomThemeConfig = {
	name: 'Jets',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #125741
		'--color-primary-50': '219 230 227', // #dbe6e3
		'--color-primary-100': '208 221 217', // #d0ddd9
		'--color-primary-200': '196 213 208', // #c4d5d0
		'--color-primary-300': '160 188 179', // #a0bcb3
		'--color-primary-400': '89 137 122', // #59897a
		'--color-primary-500': '18 87 65', // #125741
		'--color-primary-600': '16 78 59', // #104e3b
		'--color-primary-700': '14 65 49', // #0e4131
		'--color-primary-800': '11 52 39', // #0b3427
		'--color-primary-900': '9 43 32', // #092b20
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #125741
		'--color-surface-50': '219 230 227', // #dbe6e3
		'--color-surface-100': '208 221 217', // #d0ddd9
		'--color-surface-200': '196 213 208', // #c4d5d0
		'--color-surface-300': '160 188 179', // #a0bcb3
		'--color-surface-400': '89 137 122', // #59897a
		'--color-surface-500': '18 87 65', // #125741
		'--color-surface-600': '16 78 59', // #104e3b
		'--color-surface-700': '14 65 49', // #0e4131
		'--color-surface-800': '11 52 39', // #0b3427
		'--color-surface-900': '9 43 32' // #092b20
	}
};

export const patriots: CustomThemeConfig = {
	name: 'Patriots',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #002244
		'--color-primary-50': '217 222 227', // #d9dee3
		'--color-primary-100': '204 211 218', // #ccd3da
		'--color-primary-200': '191 200 208', // #bfc8d0
		'--color-primary-300': '153 167 180', // #99a7b4
		'--color-primary-400': '77 100 124', // #4d647c
		'--color-primary-500': '0 34 68', // #002244
		'--color-primary-600': '0 31 61', // #001f3d
		'--color-primary-700': '0 26 51', // #001a33
		'--color-primary-800': '0 20 41', // #001429
		'--color-primary-900': '0 17 33', // #001121
		// secondary | #c70b30
		'--color-secondary-50': '247 218 224', // #f7dae0
		'--color-secondary-100': '244 206 214', // #f4ced6
		'--color-secondary-200': '241 194 203', // #f1c2cb
		'--color-secondary-300': '233 157 172', // #e99dac
		'--color-secondary-400': '216 84 110', // #d8546e
		'--color-secondary-500': '199 11 48', // #c70b30
		'--color-secondary-600': '179 10 43', // #b30a2b
		'--color-secondary-700': '149 8 36', // #950824
		'--color-secondary-800': '119 7 29', // #77071d
		'--color-secondary-900': '98 5 24', // #620518
		// tertiary | #b0b7bb
		'--color-tertiary-50': '243 244 245', // #f3f4f5
		'--color-tertiary-100': '239 241 241', // #eff1f1
		'--color-tertiary-200': '235 237 238', // #ebedee
		'--color-tertiary-300': '223 226 228', // #dfe2e4
		'--color-tertiary-400': '200 205 207', // #c8cdcf
		'--color-tertiary-500': '176 183 187', // #b0b7bb
		'--color-tertiary-600': '158 165 168', // #9ea5a8
		'--color-tertiary-700': '132 137 140', // #84898c
		'--color-tertiary-800': '106 110 112', // #6a6e70
		'--color-tertiary-900': '86 90 92', // #565a5c
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #002244
		'--color-surface-50': '217 222 227', // #d9dee3
		'--color-surface-100': '204 211 218', // #ccd3da
		'--color-surface-200': '191 200 208', // #bfc8d0
		'--color-surface-300': '153 167 180', // #99a7b4
		'--color-surface-400': '77 100 124', // #4d647c
		'--color-surface-500': '0 34 68', // #002244
		'--color-surface-600': '0 31 61', // #001f3d
		'--color-surface-700': '0 26 51', // #001a33
		'--color-surface-800': '0 20 41', // #001429
		'--color-surface-900': '0 17 33' // #001121
	}
};

export const ravens: CustomThemeConfig = {
	name: 'Ravens',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #241773
		'--color-primary-50': '222 220 234', // #dedcea
		'--color-primary-100': '211 209 227', // #d3d1e3
		'--color-primary-200': '200 197 220', // #c8c5dc
		'--color-primary-300': '167 162 199', // #a7a2c7
		'--color-primary-400': '102 93 157', // #665d9d
		'--color-primary-500': '36 23 115', // #241773
		'--color-primary-600': '32 21 104', // #201568
		'--color-primary-700': '27 17 86', // #1b1156
		'--color-primary-800': '22 14 69', // #160e45
		'--color-primary-900': '18 11 56', // #120b38
		// secondary | #ad8900
		'--color-secondary-50': '243 237 217', // #f3edd9
		'--color-secondary-100': '239 231 204', // #efe7cc
		'--color-secondary-200': '235 226 191', // #ebe2bf
		'--color-secondary-300': '222 208 153', // #ded099
		'--color-secondary-400': '198 172 77', // #c6ac4d
		'--color-secondary-500': '173 137 0', // #ad8900
		'--color-secondary-600': '156 123 0', // #9c7b00
		'--color-secondary-700': '130 103 0', // #826700
		'--color-secondary-800': '104 82 0', // #685200
		'--color-secondary-900': '85 67 0', // #554300
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #24135f
		'--color-surface-50': '222 220 231', // #dedce7
		'--color-surface-100': '211 208 223', // #d3d0df
		'--color-surface-200': '200 196 215', // #c8c4d7
		'--color-surface-300': '167 161 191', // #a7a1bf
		'--color-surface-400': '102 90 143', // #665a8f
		'--color-surface-500': '36 19 95', // #24135f
		'--color-surface-600': '32 17 86', // #201156
		'--color-surface-700': '27 14 71', // #1b0e47
		'--color-surface-800': '22 11 57', // #160b39
		'--color-surface-900': '18 9 47' // #12092f
	}
};

export const steelers: CustomThemeConfig = {
	name: 'Steelers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ffb611
		'--color-primary-50': '255 244 219', // #fff4db
		'--color-primary-100': '255 240 207', // #fff0cf
		'--color-primary-200': '255 237 196', // #ffedc4
		'--color-primary-300': '255 226 160', // #ffe2a0
		'--color-primary-400': '255 204 88', // #ffcc58
		'--color-primary-500': '255 182 17', // #ffb611
		'--color-primary-600': '230 164 15', // #e6a40f
		'--color-primary-700': '191 137 13', // #bf890d
		'--color-primary-800': '153 109 10', // #996d0a
		'--color-primary-900': '125 89 8', // #7d5908
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #ffb611
		'--color-surface-50': '255 244 219', // #fff4db
		'--color-surface-100': '255 240 207', // #fff0cf
		'--color-surface-200': '255 237 196', // #ffedc4
		'--color-surface-300': '255 226 160', // #ffe2a0
		'--color-surface-400': '255 204 88', // #ffcc58
		'--color-surface-500': '255 182 17', // #ffb611
		'--color-surface-600': '230 164 15', // #e6a40f
		'--color-surface-700': '191 137 13', // #bf890d
		'--color-surface-800': '153 109 10', // #996d0a
		'--color-surface-900': '125 89 8' // #7d5908
	}
};

export const texans: CustomThemeConfig = {
	name: 'Texans',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #03202f
		'--color-primary-50': '217 222 224', // #d9dee0
		'--color-primary-100': '205 210 213', // #cdd2d5
		'--color-primary-200': '192 199 203', // #c0c7cb
		'--color-primary-300': '154 166 172', // #9aa6ac
		'--color-primary-400': '79 99 109', // #4f636d
		'--color-primary-500': '3 32 47', // #03202f
		'--color-primary-600': '3 29 42', // #031d2a
		'--color-primary-700': '2 24 35', // #021823
		'--color-primary-800': '2 19 28', // #02131c
		'--color-primary-900': '1 16 23', // #011017
		// secondary | #a71930
		'--color-secondary-50': '242 221 224', // #f2dde0
		'--color-secondary-100': '237 209 214', // #edd1d6
		'--color-secondary-200': '233 198 203', // #e9c6cb
		'--color-secondary-300': '220 163 172', // #dca3ac
		'--color-secondary-400': '193 94 110', // #c15e6e
		'--color-secondary-500': '167 25 48', // #a71930
		'--color-secondary-600': '150 23 43', // #96172b
		'--color-secondary-700': '125 19 36', // #7d1324
		'--color-secondary-800': '100 15 29', // #640f1d
		'--color-secondary-900': '82 12 24', // #520c18
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #03202f
		'--color-surface-50': '217 222 224', // #d9dee0
		'--color-surface-100': '205 210 213', // #cdd2d5
		'--color-surface-200': '192 199 203', // #c0c7cb
		'--color-surface-300': '154 166 172', // #9aa6ac
		'--color-surface-400': '79 99 109', // #4f636d
		'--color-surface-500': '3 32 47', // #03202f
		'--color-surface-600': '3 29 42', // #031d2a
		'--color-surface-700': '2 24 35', // #021823
		'--color-surface-800': '2 19 28', // #02131c
		'--color-surface-900': '1 16 23' // #011017
	}
};

export const jaguars: CustomThemeConfig = {
	name: 'Jaguars',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #016778
		'--color-primary-50': '217 232 235', // #d9e8eb
		'--color-primary-100': '204 225 228', // #cce1e4
		'--color-primary-200': '192 217 221', // #c0d9dd
		'--color-primary-300': '153 194 201', // #99c2c9
		'--color-primary-400': '77 149 161', // #4d95a1
		'--color-primary-500': '1 103 120', // #016778
		'--color-primary-600': '1 93 108', // #015d6c
		'--color-primary-700': '1 77 90', // #014d5a
		'--color-primary-800': '1 62 72', // #013e48
		'--color-primary-900': '0 50 59', // #00323b
		// secondary | #9f7a2b
		'--color-secondary-50': '241 235 223', // #f1ebdf
		'--color-secondary-100': '236 228 213', // #ece4d5
		'--color-secondary-200': '231 222 202', // #e7deca
		'--color-secondary-300': '217 202 170', // #d9caaa
		'--color-secondary-400': '188 162 107', // #bca26b
		'--color-secondary-500': '159 122 43', // #9f7a2b
		'--color-secondary-600': '143 110 39', // #8f6e27
		'--color-secondary-700': '119 92 32', // #775c20
		'--color-secondary-800': '95 73 26', // #5f491a
		'--color-secondary-900': '78 60 21', // #4e3c15
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #016778
		'--color-surface-50': '217 232 235', // #d9e8eb
		'--color-surface-100': '204 225 228', // #cce1e4
		'--color-surface-200': '192 217 221', // #c0d9dd
		'--color-surface-300': '153 194 201', // #99c2c9
		'--color-surface-400': '77 149 161', // #4d95a1
		'--color-surface-500': '1 103 120', // #016778
		'--color-surface-600': '1 93 108', // #015d6c
		'--color-surface-700': '1 77 90', // #014d5a
		'--color-surface-800': '1 62 72', // #013e48
		'--color-surface-900': '0 50 59' // #00323b
	}
};

export const titans: CustomThemeConfig = {
	name: 'Titans',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0c2340
		'--color-primary-50': '219 222 226', // #dbdee2
		'--color-primary-100': '206 211 217', // #ced3d9
		'--color-primary-200': '194 200 207', // #c2c8cf
		'--color-primary-300': '158 167 179', // #9ea7b3
		'--color-primary-400': '85 101 121', // #556579
		'--color-primary-500': '12 35 64', // #0c2340
		'--color-primary-600': '11 32 58', // #0b203a
		'--color-primary-700': '9 26 48', // #091a30
		'--color-primary-800': '7 21 38', // #071526
		'--color-primary-900': '6 17 31', // #06111f
		// secondary | #4c92db
		'--color-secondary-50': '228 239 250', // #e4effa
		'--color-secondary-100': '219 233 248', // #dbe9f8
		'--color-secondary-200': '210 228 246', // #d2e4f6
		'--color-secondary-300': '183 211 241', // #b7d3f1
		'--color-secondary-400': '130 179 230', // #82b3e6
		'--color-secondary-500': '76 146 219', // #4c92db
		'--color-secondary-600': '68 131 197', // #4483c5
		'--color-secondary-700': '57 110 164', // #396ea4
		'--color-secondary-800': '46 88 131', // #2e5883
		'--color-secondary-900': '37 72 107', // #25486b
		// tertiary | #c8102f
		'--color-tertiary-50': '247 219 224', // #f7dbe0
		'--color-tertiary-100': '244 207 213', // #f4cfd5
		'--color-tertiary-200': '241 195 203', // #f1c3cb
		'--color-tertiary-300': '233 159 172', // #e99fac
		'--color-tertiary-400': '217 88 109', // #d9586d
		'--color-tertiary-500': '200 16 47', // #c8102f
		'--color-tertiary-600': '180 14 42', // #b40e2a
		'--color-tertiary-700': '150 12 35', // #960c23
		'--color-tertiary-800': '120 10 28', // #780a1c
		'--color-tertiary-900': '98 8 23', // #620817
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0c2340
		'--color-surface-50': '219 222 226', // #dbdee2
		'--color-surface-100': '206 211 217', // #ced3d9
		'--color-surface-200': '194 200 207', // #c2c8cf
		'--color-surface-300': '158 167 179', // #9ea7b3
		'--color-surface-400': '85 101 121', // #556579
		'--color-surface-500': '12 35 64', // #0c2340
		'--color-surface-600': '11 32 58', // #0b203a
		'--color-surface-700': '9 26 48', // #091a30
		'--color-surface-800': '7 21 38', // #071526
		'--color-surface-900': '6 17 31' // #06111f
	}
};

export const broncos: CustomThemeConfig = {
	name: 'Broncos',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #fb4f14
		'--color-primary-50': '254 229 220', // #fee5dc
		'--color-primary-100': '254 220 208', // #fedcd0
		'--color-primary-200': '254 211 196', // #fed3c4
		'--color-primary-300': '253 185 161', // #fdb9a1
		'--color-primary-400': '252 132 91', // #fc845b
		'--color-primary-500': '251 79 20', // #fb4f14
		'--color-primary-600': '226 71 18', // #e24712
		'--color-primary-700': '188 59 15', // #bc3b0f
		'--color-primary-800': '151 47 12', // #972f0c
		'--color-primary-900': '123 39 10', // #7b270a
		// secondary | #002244
		'--color-secondary-50': '217 222 227', // #d9dee3
		'--color-secondary-100': '204 211 218', // #ccd3da
		'--color-secondary-200': '191 200 208', // #bfc8d0
		'--color-secondary-300': '153 167 180', // #99a7b4
		'--color-secondary-400': '77 100 124', // #4d647c
		'--color-secondary-500': '0 34 68', // #002244
		'--color-secondary-600': '0 31 61', // #001f3d
		'--color-secondary-700': '0 26 51', // #001a33
		'--color-secondary-800': '0 20 41', // #001429
		'--color-secondary-900': '0 17 33', // #001121
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #fb4f14
		'--color-surface-50': '254 229 220', // #fee5dc
		'--color-surface-100': '254 220 208', // #fedcd0
		'--color-surface-200': '254 211 196', // #fed3c4
		'--color-surface-300': '253 185 161', // #fdb9a1
		'--color-surface-400': '252 132 91', // #fc845b
		'--color-surface-500': '251 79 20', // #fb4f14
		'--color-surface-600': '226 71 18', // #e24712
		'--color-surface-700': '188 59 15', // #bc3b0f
		'--color-surface-800': '151 47 12', // #972f0c
		'--color-surface-900': '123 39 10' // #7b270a
	}
};

export const chiefs: CustomThemeConfig = {
	name: 'Chiefs',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #e31837
		'--color-primary-50': '251 220 225', // #fbdce1
		'--color-primary-100': '249 209 215', // #f9d1d7
		'--color-primary-200': '248 197 205', // #f8c5cd
		'--color-primary-300': '244 163 175', // #f4a3af
		'--color-primary-400': '235 93 115', // #eb5d73
		'--color-primary-500': '227 24 55', // #e31837
		'--color-primary-600': '204 22 50', // #cc1632
		'--color-primary-700': '170 18 41', // #aa1229
		'--color-primary-800': '136 14 33', // #880e21
		'--color-primary-900': '111 12 27', // #6f0c1b
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #ffb81d
		'--color-tertiary-50': '255 244 221', // #fff4dd
		'--color-tertiary-100': '255 241 210', // #fff1d2
		'--color-tertiary-200': '255 237 199', // #ffedc7
		'--color-tertiary-300': '255 227 165', // #ffe3a5
		'--color-tertiary-400': '255 205 97', // #ffcd61
		'--color-tertiary-500': '255 184 29', // #ffb81d
		'--color-tertiary-600': '230 166 26', // #e6a61a
		'--color-tertiary-700': '191 138 22', // #bf8a16
		'--color-tertiary-800': '153 110 17', // #996e11
		'--color-tertiary-900': '125 90 14', // #7d5a0e
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #e31837
		'--color-surface-50': '251 220 225', // #fbdce1
		'--color-surface-100': '249 209 215', // #f9d1d7
		'--color-surface-200': '248 197 205', // #f8c5cd
		'--color-surface-300': '244 163 175', // #f4a3af
		'--color-surface-400': '235 93 115', // #eb5d73
		'--color-surface-500': '227 24 55', // #e31837
		'--color-surface-600': '204 22 50', // #cc1632
		'--color-surface-700': '170 18 41', // #aa1229
		'--color-surface-800': '136 14 33', // #880e21
		'--color-surface-900': '111 12 27' // #6f0c1b
	}
};

export const raiders: CustomThemeConfig = {
	name: 'Raiders',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #a5acaf
		'--color-primary-50': '242 243 243', // #f2f3f3
		'--color-primary-100': '237 238 239', // #edeeef
		'--color-primary-200': '233 234 235', // #e9eaeb
		'--color-primary-300': '219 222 223', // #dbdedf
		'--color-primary-400': '192 197 199', // #c0c5c7
		'--color-primary-500': '165 172 175', // #a5acaf
		'--color-primary-600': '149 155 158', // #959b9e
		'--color-primary-700': '124 129 131', // #7c8183
		'--color-primary-800': '99 103 105', // #636769
		'--color-primary-900': '81 84 86', // #515456
		// secondary | #a5acaf
		'--color-secondary-50': '242 243 243', // #f2f3f3
		'--color-secondary-100': '237 238 239', // #edeeef
		'--color-secondary-200': '233 234 235', // #e9eaeb
		'--color-secondary-300': '219 222 223', // #dbdedf
		'--color-secondary-400': '192 197 199', // #c0c5c7
		'--color-secondary-500': '165 172 175', // #a5acaf
		'--color-secondary-600': '149 155 158', // #959b9e
		'--color-secondary-700': '124 129 131', // #7c8183
		'--color-secondary-800': '99 103 105', // #636769
		'--color-secondary-900': '81 84 86', // #515456
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #000000
		'--color-surface-50': '217 217 217', // #d9d9d9
		'--color-surface-100': '204 204 204', // #cccccc
		'--color-surface-200': '191 191 191', // #bfbfbf
		'--color-surface-300': '153 153 153', // #999999
		'--color-surface-400': '77 77 77', // #4d4d4d
		'--color-surface-500': '0 0 0', // #000000
		'--color-surface-600': '0 0 0', // #000000
		'--color-surface-700': '0 0 0', // #000000
		'--color-surface-800': '0 0 0', // #000000
		'--color-surface-900': '0 0 0' // #000000
	}
};

export const chargers: CustomThemeConfig = {
	name: 'Chargers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #0080c6
		'--color-primary-50': '217 236 246', // #d9ecf6
		'--color-primary-100': '204 230 244', // #cce6f4
		'--color-primary-200': '191 223 241', // #bfdff1
		'--color-primary-300': '153 204 232', // #99cce8
		'--color-primary-400': '77 166 215', // #4da6d7
		'--color-primary-500': '0 128 198', // #0080c6
		'--color-primary-600': '0 115 178', // #0073b2
		'--color-primary-700': '0 96 149', // #006095
		'--color-primary-800': '0 77 119', // #004d77
		'--color-primary-900': '0 63 97', // #003f61
		// secondary | #ffc20d
		'--color-secondary-50': '255 246 219', // #fff6db
		'--color-secondary-100': '255 243 207', // #fff3cf
		'--color-secondary-200': '255 240 195', // #fff0c3
		'--color-secondary-300': '255 231 158', // #ffe79e
		'--color-secondary-400': '255 212 86', // #ffd456
		'--color-secondary-500': '255 194 13', // #ffc20d
		'--color-secondary-600': '230 175 12', // #e6af0c
		'--color-secondary-700': '191 146 10', // #bf920a
		'--color-secondary-800': '153 116 8', // #997408
		'--color-secondary-900': '125 95 6', // #7d5f06
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0080c6
		'--color-surface-50': '217 236 246', // #d9ecf6
		'--color-surface-100': '204 230 244', // #cce6f4
		'--color-surface-200': '191 223 241', // #bfdff1
		'--color-surface-300': '153 204 232', // #99cce8
		'--color-surface-400': '77 166 215', // #4da6d7
		'--color-surface-500': '0 128 198', // #0080c6
		'--color-surface-600': '0 115 178', // #0073b2
		'--color-surface-700': '0 96 149', // #006095
		'--color-surface-800': '0 77 119', // #004d77
		'--color-surface-900': '0 63 97' // #003f61
	}
};

export const bears: CustomThemeConfig = {
	name: 'Bears',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #c73804
		'--color-primary-50': '247 225 217', // #f7e1d9
		'--color-primary-100': '244 215 205', // #f4d7cd
		'--color-primary-200': '241 205 192', // #f1cdc0
		'--color-primary-300': '233 175 155', // #e9af9b
		'--color-primary-400': '216 116 79', // #d8744f
		'--color-primary-500': '199 56 4', // #c73804
		'--color-primary-600': '179 50 4', // #b33204
		'--color-primary-700': '149 42 3', // #952a03
		'--color-primary-800': '119 34 2', // #772202
		'--color-primary-900': '98 27 2', // #621b02
		// secondary | #0a162a
		'--color-secondary-50': '218 220 223', // #dadcdf
		'--color-secondary-100': '206 208 212', // #ced0d4
		'--color-secondary-200': '194 197 202', // #c2c5ca
		'--color-secondary-300': '157 162 170', // #9da2aa
		'--color-secondary-400': '84 92 106', // #545c6a
		'--color-secondary-500': '10 22 42', // #0a162a
		'--color-secondary-600': '9 20 38', // #091426
		'--color-secondary-700': '8 17 32', // #081120
		'--color-secondary-800': '6 13 25', // #060d19
		'--color-secondary-900': '5 11 21', // #050b15
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #c73804
		'--color-surface-50': '247 225 217', // #f7e1d9
		'--color-surface-100': '244 215 205', // #f4d7cd
		'--color-surface-200': '241 205 192', // #f1cdc0
		'--color-surface-300': '233 175 155', // #e9af9b
		'--color-surface-400': '216 116 79', // #d8744f
		'--color-surface-500': '199 56 4', // #c73804
		'--color-surface-600': '179 50 4', // #b33204
		'--color-surface-700': '149 42 3', // #952a03
		'--color-surface-800': '119 34 2', // #772202
		'--color-surface-900': '98 27 2' // #621b02
	}
};

export const lions: CustomThemeConfig = {
	name: 'Lions',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0076b6
		'--color-primary-50': '217 234 244', // #d9eaf4
		'--color-primary-100': '204 228 240', // #cce4f0
		'--color-primary-200': '191 221 237', // #bfdded
		'--color-primary-300': '153 200 226', // #99c8e2
		'--color-primary-400': '77 159 204', // #4d9fcc
		'--color-primary-500': '0 118 182', // #0076b6
		'--color-primary-600': '0 106 164', // #006aa4
		'--color-primary-700': '0 89 137', // #005989
		'--color-primary-800': '0 71 109', // #00476d
		'--color-primary-900': '0 58 89', // #003a59
		// secondary | #b0b7bb
		'--color-secondary-50': '243 244 245', // #f3f4f5
		'--color-secondary-100': '239 241 241', // #eff1f1
		'--color-secondary-200': '235 237 238', // #ebedee
		'--color-secondary-300': '223 226 228', // #dfe2e4
		'--color-secondary-400': '200 205 207', // #c8cdcf
		'--color-secondary-500': '176 183 187', // #b0b7bb
		'--color-secondary-600': '158 165 168', // #9ea5a8
		'--color-secondary-700': '132 137 140', // #84898c
		'--color-secondary-800': '106 110 112', // #6a6e70
		'--color-secondary-900': '86 90 92', // #565a5c
		// tertiary | #000000
		'--color-tertiary-50': '217 217 217', // #d9d9d9
		'--color-tertiary-100': '204 204 204', // #cccccc
		'--color-tertiary-200': '191 191 191', // #bfbfbf
		'--color-tertiary-300': '153 153 153', // #999999
		'--color-tertiary-400': '77 77 77', // #4d4d4d
		'--color-tertiary-500': '0 0 0', // #000000
		'--color-tertiary-600': '0 0 0', // #000000
		'--color-tertiary-700': '0 0 0', // #000000
		'--color-tertiary-800': '0 0 0', // #000000
		'--color-tertiary-900': '0 0 0', // #000000
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0076b6
		'--color-surface-50': '217 234 244', // #d9eaf4
		'--color-surface-100': '204 228 240', // #cce4f0
		'--color-surface-200': '191 221 237', // #bfdded
		'--color-surface-300': '153 200 226', // #99c8e2
		'--color-surface-400': '77 159 204', // #4d9fcc
		'--color-surface-500': '0 118 182', // #0076b6
		'--color-surface-600': '0 106 164', // #006aa4
		'--color-surface-700': '0 89 137', // #005989
		'--color-surface-800': '0 71 109', // #00476d
		'--color-surface-900': '0 58 89' // #003a59
	}
};

export const packers: CustomThemeConfig = {
	name: 'Packers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #203731
		'--color-primary-50': '222 225 224', // #dee1e0
		'--color-primary-100': '210 215 214', // #d2d7d6
		'--color-primary-200': '199 205 204', // #c7cdcc
		'--color-primary-300': '166 175 173', // #a6afad
		'--color-primary-400': '99 115 111', // #63736f
		'--color-primary-500': '32 55 49', // #203731
		'--color-primary-600': '29 50 44', // #1d322c
		'--color-primary-700': '24 41 37', // #182925
		'--color-primary-800': '19 33 29', // #13211d
		'--color-primary-900': '16 27 24', // #101b18
		// secondary | #ffb611
		'--color-secondary-50': '255 244 219', // #fff4db
		'--color-secondary-100': '255 240 207', // #fff0cf
		'--color-secondary-200': '255 237 196', // #ffedc4
		'--color-secondary-300': '255 226 160', // #ffe2a0
		'--color-secondary-400': '255 204 88', // #ffcc58
		'--color-secondary-500': '255 182 17', // #ffb611
		'--color-secondary-600': '230 164 15', // #e6a40f
		'--color-secondary-700': '191 137 13', // #bf890d
		'--color-secondary-800': '153 109 10', // #996d0a
		'--color-secondary-900': '125 89 8', // #7d5908
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #203731
		'--color-surface-50': '222 225 224', // #dee1e0
		'--color-surface-100': '210 215 214', // #d2d7d6
		'--color-surface-200': '199 205 204', // #c7cdcc
		'--color-surface-300': '166 175 173', // #a6afad
		'--color-surface-400': '99 115 111', // #63736f
		'--color-surface-500': '32 55 49', // #203731
		'--color-surface-600': '29 50 44', // #1d322c
		'--color-surface-700': '24 41 37', // #182925
		'--color-surface-800': '19 33 29', // #13211d
		'--color-surface-900': '16 27 24' // #101b18
	}
};

export const vikings: CustomThemeConfig = {
	name: 'Vikings',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #4f2683
		'--color-primary-50': '229 222 236', // #e5deec
		'--color-primary-100': '220 212 230', // #dcd4e6
		'--color-primary-200': '211 201 224', // #d3c9e0
		'--color-primary-300': '185 168 205', // #b9a8cd
		'--color-primary-400': '132 103 168', // #8467a8
		'--color-primary-500': '79 38 131', // #4f2683
		'--color-primary-600': '71 34 118', // #472276
		'--color-primary-700': '59 29 98', // #3b1d62
		'--color-primary-800': '47 23 79', // #2f174f
		'--color-primary-900': '39 19 64', // #271340
		// secondary | #ffc630
		'--color-secondary-50': '255 246 224', // #fff6e0
		'--color-secondary-100': '255 244 214', // #fff4d6
		'--color-secondary-200': '255 241 203', // #fff1cb
		'--color-secondary-300': '255 232 172', // #ffe8ac
		'--color-secondary-400': '255 215 110', // #ffd76e
		'--color-secondary-500': '255 198 48', // #ffc630
		'--color-secondary-600': '230 178 43', // #e6b22b
		'--color-secondary-700': '191 149 36', // #bf9524
		'--color-secondary-800': '153 119 29', // #99771d
		'--color-secondary-900': '125 97 24', // #7d6118
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #4f2683
		'--color-surface-50': '229 222 236', // #e5deec
		'--color-surface-100': '220 212 230', // #dcd4e6
		'--color-surface-200': '211 201 224', // #d3c9e0
		'--color-surface-300': '185 168 205', // #b9a8cd
		'--color-surface-400': '132 103 168', // #8467a8
		'--color-surface-500': '79 38 131', // #4f2683
		'--color-surface-600': '71 34 118', // #472276
		'--color-surface-700': '59 29 98', // #3b1d62
		'--color-surface-800': '47 23 79', // #2f174f
		'--color-surface-900': '39 19 64' // #271340
	}
};

export const cowboys: CustomThemeConfig = {
	name: 'Cowboys',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #041e42
		'--color-primary-50': '217 221 227', // #d9dde3
		'--color-primary-100': '205 210 217', // #cdd2d9
		'--color-primary-200': '192 199 208', // #c0c7d0
		'--color-primary-300': '155 165 179', // #9ba5b3
		'--color-primary-400': '79 98 123', // #4f627b
		'--color-primary-500': '4 30 66', // #041e42
		'--color-primary-600': '4 27 59', // #041b3b
		'--color-primary-700': '3 23 50', // #031732
		'--color-primary-800': '2 18 40', // #021228
		'--color-primary-900': '2 15 32', // #020f20
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #859396
		'--color-tertiary-50': '237 239 239', // #edefef
		'--color-tertiary-100': '231 233 234', // #e7e9ea
		'--color-tertiary-200': '225 228 229', // #e1e4e5
		'--color-tertiary-300': '206 212 213', // #ced4d5
		'--color-tertiary-400': '170 179 182', // #aab3b6
		'--color-tertiary-500': '133 147 150', // #859396
		'--color-tertiary-600': '120 132 135', // #788487
		'--color-tertiary-700': '100 110 113', // #646e71
		'--color-tertiary-800': '80 88 90', // #50585a
		'--color-tertiary-900': '65 72 74', // #41484a
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #041e42
		'--color-surface-50': '217 221 227', // #d9dde3
		'--color-surface-100': '205 210 217', // #cdd2d9
		'--color-surface-200': '192 199 208', // #c0c7d0
		'--color-surface-300': '155 165 179', // #9ba5b3
		'--color-surface-400': '79 98 123', // #4f627b
		'--color-surface-500': '4 30 66', // #041e42
		'--color-surface-600': '4 27 59', // #041b3b
		'--color-surface-700': '3 23 50', // #031732
		'--color-surface-800': '2 18 40', // #021228
		'--color-surface-900': '2 15 32' // #020f20
	}
};

export const giants: CustomThemeConfig = {
	name: 'Giants',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0b2265
		'--color-primary-50': '218 222 232', // #dadee8
		'--color-primary-100': '206 211 224', // #ced3e0
		'--color-primary-200': '194 200 217', // #c2c8d9
		'--color-primary-300': '157 167 193', // #9da7c1
		'--color-primary-400': '84 100 147', // #546493
		'--color-primary-500': '11 34 101', // #0b2265
		'--color-primary-600': '10 31 91', // #0a1f5b
		'--color-primary-700': '8 26 76', // #081a4c
		'--color-primary-800': '7 20 61', // #07143d
		'--color-primary-900': '5 17 49', // #051131
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #a71930
		'--color-tertiary-50': '242 221 224', // #f2dde0
		'--color-tertiary-100': '237 209 214', // #edd1d6
		'--color-tertiary-200': '233 198 203', // #e9c6cb
		'--color-tertiary-300': '220 163 172', // #dca3ac
		'--color-tertiary-400': '193 94 110', // #c15e6e
		'--color-tertiary-500': '167 25 48', // #a71930
		'--color-tertiary-600': '150 23 43', // #96172b
		'--color-tertiary-700': '125 19 36', // #7d1324
		'--color-tertiary-800': '100 15 29', // #640f1d
		'--color-tertiary-900': '82 12 24', // #520c18
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0b2265
		'--color-surface-50': '218 222 232', // #dadee8
		'--color-surface-100': '206 211 224', // #ced3e0
		'--color-surface-200': '194 200 217', // #c2c8d9
		'--color-surface-300': '157 167 193', // #9da7c1
		'--color-surface-400': '84 100 147', // #546493
		'--color-surface-500': '11 34 101', // #0b2265
		'--color-surface-600': '10 31 91', // #0a1f5b
		'--color-surface-700': '8 26 76', // #081a4c
		'--color-surface-800': '7 20 61', // #07143d
		'--color-surface-900': '5 17 49' // #051131
	}
};

export const eagles: CustomThemeConfig = {
	name: 'Eagles',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #004c54
		'--color-primary-50': '217 228 229', // #d9e4e5
		'--color-primary-100': '204 219 221', // #ccdbdd
		'--color-primary-200': '191 210 212', // #bfd2d4
		'--color-primary-300': '153 183 187', // #99b7bb
		'--color-primary-400': '77 130 135', // #4d8287
		'--color-primary-500': '0 76 84', // #004c54
		'--color-primary-600': '0 68 76', // #00444c
		'--color-primary-700': '0 57 63', // #00393f
		'--color-primary-800': '0 46 50', // #002e32
		'--color-primary-900': '0 37 41', // #002529
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #acc0c6
		'--color-tertiary-50': '243 246 246', // #f3f6f6
		'--color-tertiary-100': '238 242 244', // #eef2f4
		'--color-tertiary-200': '234 239 241', // #eaeff1
		'--color-tertiary-300': '222 230 232', // #dee6e8
		'--color-tertiary-400': '197 211 215', // #c5d3d7
		'--color-tertiary-500': '172 192 198', // #acc0c6
		'--color-tertiary-600': '155 173 178', // #9badb2
		'--color-tertiary-700': '129 144 149', // #819095
		'--color-tertiary-800': '103 115 119', // #677377
		'--color-tertiary-900': '84 94 97', // #545e61
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #004c54
		'--color-surface-50': '217 228 229', // #d9e4e5
		'--color-surface-100': '204 219 221', // #ccdbdd
		'--color-surface-200': '191 210 212', // #bfd2d4
		'--color-surface-300': '153 183 187', // #99b7bb
		'--color-surface-400': '77 130 135', // #4d8287
		'--color-surface-500': '0 76 84', // #004c54
		'--color-surface-600': '0 68 76', // #00444c
		'--color-surface-700': '0 57 63', // #00393f
		'--color-surface-800': '0 46 50', // #002e32
		'--color-surface-900': '0 37 41' // #002529
	}
};

export const commanders: CustomThemeConfig = {
	name: 'Commanders',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #591414
		'--color-primary-50': '230 220 220', // #e6dcdc
		'--color-primary-100': '222 208 208', // #ded0d0
		'--color-primary-200': '214 196 196', // #d6c4c4
		'--color-primary-300': '189 161 161', // #bda1a1
		'--color-primary-400': '139 91 91', // #8b5b5b
		'--color-primary-500': '89 20 20', // #591414
		'--color-primary-600': '80 18 18', // #501212
		'--color-primary-700': '67 15 15', // #430f0f
		'--color-primary-800': '53 12 12', // #350c0c
		'--color-primary-900': '44 10 10', // #2c0a0a
		// secondary | #ffb611
		'--color-secondary-50': '255 244 219', // #fff4db
		'--color-secondary-100': '255 240 207', // #fff0cf
		'--color-secondary-200': '255 237 196', // #ffedc4
		'--color-secondary-300': '255 226 160', // #ffe2a0
		'--color-secondary-400': '255 204 88', // #ffcc58
		'--color-secondary-500': '255 182 17', // #ffb611
		'--color-secondary-600': '230 164 15', // #e6a40f
		'--color-secondary-700': '191 137 13', // #bf890d
		'--color-secondary-800': '153 109 10', // #996d0a
		'--color-secondary-900': '125 89 8', // #7d5908
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #591414
		'--color-surface-50': '230 220 220', // #e6dcdc
		'--color-surface-100': '222 208 208', // #ded0d0
		'--color-surface-200': '214 196 196', // #d6c4c4
		'--color-surface-300': '189 161 161', // #bda1a1
		'--color-surface-400': '139 91 91', // #8b5b5b
		'--color-surface-500': '89 20 20', // #591414
		'--color-surface-600': '80 18 18', // #501212
		'--color-surface-700': '67 15 15', // #430f0f
		'--color-surface-800': '53 12 12', // #350c0c
		'--color-surface-900': '44 10 10' // #2c0a0a
	}
};

export const falcons: CustomThemeConfig = {
	name: 'Falcons',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #a71930
		'--color-primary-50': '242 221 224', // #f2dde0
		'--color-primary-100': '237 209 214', // #edd1d6
		'--color-primary-200': '233 198 203', // #e9c6cb
		'--color-primary-300': '220 163 172', // #dca3ac
		'--color-primary-400': '193 94 110', // #c15e6e
		'--color-primary-500': '167 25 48', // #a71930
		'--color-primary-600': '150 23 43', // #96172b
		'--color-primary-700': '125 19 36', // #7d1324
		'--color-primary-800': '100 15 29', // #640f1d
		'--color-primary-900': '82 12 24', // #520c18
		// secondary | #000000
		'--color-secondary-50': '217 217 217', // #d9d9d9
		'--color-secondary-100': '204 204 204', // #cccccc
		'--color-secondary-200': '191 191 191', // #bfbfbf
		'--color-secondary-300': '153 153 153', // #999999
		'--color-secondary-400': '77 77 77', // #4d4d4d
		'--color-secondary-500': '0 0 0', // #000000
		'--color-secondary-600': '0 0 0', // #000000
		'--color-secondary-700': '0 0 0', // #000000
		'--color-secondary-800': '0 0 0', // #000000
		'--color-secondary-900': '0 0 0', // #000000
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #a71930
		'--color-surface-50': '242 221 224', // #f2dde0
		'--color-surface-100': '237 209 214', // #edd1d6
		'--color-surface-200': '233 198 203', // #e9c6cb
		'--color-surface-300': '220 163 172', // #dca3ac
		'--color-surface-400': '193 94 110', // #c15e6e
		'--color-surface-500': '167 25 48', // #a71930
		'--color-surface-600': '150 23 43', // #96172b
		'--color-surface-700': '125 19 36', // #7d1324
		'--color-surface-800': '100 15 29', // #640f1d
		'--color-surface-900': '82 12 24' // #520c18
	}
};

export const panthers: CustomThemeConfig = {
	name: 'Panthers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #0285ca
		'--color-primary-50': '217 237 247', // #d9edf7
		'--color-primary-100': '204 231 244', // #cce7f4
		'--color-primary-200': '192 225 242', // #c0e1f2
		'--color-primary-300': '154 206 234', // #9aceea
		'--color-primary-400': '78 170 218', // #4eaada
		'--color-primary-500': '2 133 202', // #0285ca
		'--color-primary-600': '2 120 182', // #0278b6
		'--color-primary-700': '2 100 152', // #026498
		'--color-primary-800': '1 80 121', // #015079
		'--color-primary-900': '1 65 99', // #014163
		// secondary | #000000
		'--color-secondary-50': '217 217 217', // #d9d9d9
		'--color-secondary-100': '204 204 204', // #cccccc
		'--color-secondary-200': '191 191 191', // #bfbfbf
		'--color-secondary-300': '153 153 153', // #999999
		'--color-secondary-400': '77 77 77', // #4d4d4d
		'--color-secondary-500': '0 0 0', // #000000
		'--color-secondary-600': '0 0 0', // #000000
		'--color-secondary-700': '0 0 0', // #000000
		'--color-secondary-800': '0 0 0', // #000000
		'--color-secondary-900': '0 0 0', // #000000
		// tertiary | #bfc0bf
		'--color-tertiary-50': '245 246 245', // #f5f6f5
		'--color-tertiary-100': '242 242 242', // #f2f2f2
		'--color-tertiary-200': '239 239 239', // #efefef
		'--color-tertiary-300': '229 230 229', // #e5e6e5
		'--color-tertiary-400': '210 211 210', // #d2d3d2
		'--color-tertiary-500': '191 192 191', // #bfc0bf
		'--color-tertiary-600': '172 173 172', // #acadac
		'--color-tertiary-700': '143 144 143', // #8f908f
		'--color-tertiary-800': '115 115 115', // #737373
		'--color-tertiary-900': '94 94 94', // #5e5e5e
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0285ca
		'--color-surface-50': '217 237 247', // #d9edf7
		'--color-surface-100': '204 231 244', // #cce7f4
		'--color-surface-200': '192 225 242', // #c0e1f2
		'--color-surface-300': '154 206 234', // #9aceea
		'--color-surface-400': '78 170 218', // #4eaada
		'--color-surface-500': '2 133 202', // #0285ca
		'--color-surface-600': '2 120 182', // #0278b6
		'--color-surface-700': '2 100 152', // #026498
		'--color-surface-800': '1 80 121', // #015079
		'--color-surface-900': '1 65 99' // #014163
	}
};

export const saints: CustomThemeConfig = {
	name: 'Saints',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #d3bc8d
		'--color-primary-50': '248 245 238', // #f8f5ee
		'--color-primary-100': '246 242 232', // #f6f2e8
		'--color-primary-200': '244 238 227', // #f4eee3
		'--color-primary-300': '237 228 209', // #ede4d1
		'--color-primary-400': '224 208 175', // #e0d0af
		'--color-primary-500': '211 188 141', // #d3bc8d
		'--color-primary-600': '190 169 127', // #bea97f
		'--color-primary-700': '158 141 106', // #9e8d6a
		'--color-primary-800': '127 113 85', // #7f7155
		'--color-primary-900': '103 92 69', // #675c45
		// secondary | #000000
		'--color-secondary-50': '217 217 217', // #d9d9d9
		'--color-secondary-100': '204 204 204', // #cccccc
		'--color-secondary-200': '191 191 191', // #bfbfbf
		'--color-secondary-300': '153 153 153', // #999999
		'--color-secondary-400': '77 77 77', // #4d4d4d
		'--color-secondary-500': '0 0 0', // #000000
		'--color-secondary-600': '0 0 0', // #000000
		'--color-secondary-700': '0 0 0', // #000000
		'--color-secondary-800': '0 0 0', // #000000
		'--color-secondary-900': '0 0 0', // #000000
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #d3bc8d
		'--color-surface-50': '248 245 238', // #f8f5ee
		'--color-surface-100': '246 242 232', // #f6f2e8
		'--color-surface-200': '244 238 227', // #f4eee3
		'--color-surface-300': '237 228 209', // #ede4d1
		'--color-surface-400': '224 208 175', // #e0d0af
		'--color-surface-500': '211 188 141', // #d3bc8d
		'--color-surface-600': '190 169 127', // #bea97f
		'--color-surface-700': '158 141 106', // #9e8d6a
		'--color-surface-800': '127 113 85', // #7f7155
		'--color-surface-900': '103 92 69' // #675c45
	}
};

export const buccaneers: CustomThemeConfig = {
	name: 'Buccaneers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #d50b0a
		'--color-primary-50': '249 218 218', // #f9dada
		'--color-primary-100': '247 206 206', // #f7cece
		'--color-primary-200': '245 194 194', // #f5c2c2
		'--color-primary-300': '238 157 157', // #ee9d9d
		'--color-primary-400': '226 84 84', // #e25454
		'--color-primary-500': '213 11 10', // #d50b0a
		'--color-primary-600': '192 10 9', // #c00a09
		'--color-primary-700': '160 8 8', // #a00808
		'--color-primary-800': '128 7 6', // #800706
		'--color-primary-900': '104 5 5', // #680505
		// secondary | #34302c
		'--color-secondary-50': '225 224 223', // #e1e0df
		'--color-secondary-100': '214 214 213', // #d6d6d5
		'--color-secondary-200': '204 203 202', // #cccbca
		'--color-secondary-300': '174 172 171', // #aeacab
		'--color-secondary-400': '113 110 107', // #716e6b
		'--color-secondary-500': '52 48 44', // #34302c
		'--color-secondary-600': '47 43 40', // #2f2b28
		'--color-secondary-700': '39 36 33', // #272421
		'--color-secondary-800': '31 29 26', // #1f1d1a
		'--color-secondary-900': '25 24 22', // #191816
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #d50b0a
		'--color-surface-50': '249 218 218', // #f9dada
		'--color-surface-100': '247 206 206', // #f7cece
		'--color-surface-200': '245 194 194', // #f5c2c2
		'--color-surface-300': '238 157 157', // #ee9d9d
		'--color-surface-400': '226 84 84', // #e25454
		'--color-surface-500': '213 11 10', // #d50b0a
		'--color-surface-600': '192 10 9', // #c00a09
		'--color-surface-700': '160 8 8', // #a00808
		'--color-surface-800': '128 7 6', // #800706
		'--color-surface-900': '104 5 5' // #680505
	}
};

export const cardinals: CustomThemeConfig = {
	name: 'Cardinals',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #97233f
		'--color-primary-50': '239 222 226', // #efdee2
		'--color-primary-100': '234 211 217', // #ead3d9
		'--color-primary-200': '229 200 207', // #e5c8cf
		'--color-primary-300': '213 167 178', // #d5a7b2
		'--color-primary-400': '182 101 121', // #b66579
		'--color-primary-500': '151 35 63', // #97233f
		'--color-primary-600': '136 32 57', // #882039
		'--color-primary-700': '113 26 47', // #711a2f
		'--color-primary-800': '91 21 38', // #5b1526
		'--color-primary-900': '74 17 31', // #4a111f
		// secondary | #222021
		'--color-secondary-50': '222 222 222', // #dedede
		'--color-secondary-100': '211 210 211', // #d3d2d3
		'--color-secondary-200': '200 199 200', // #c8c7c8
		'--color-secondary-300': '167 166 166', // #a7a6a6
		'--color-secondary-400': '100 99 100', // #646364
		'--color-secondary-500': '34 32 33', // #222021
		'--color-secondary-600': '31 29 30', // #1f1d1e
		'--color-secondary-700': '26 24 25', // #1a1819
		'--color-secondary-800': '20 19 20', // #141314
		'--color-secondary-900': '17 16 16', // #111010
		// tertiary | #ffb611
		'--color-tertiary-50': '255 244 219', // #fff4db
		'--color-tertiary-100': '255 240 207', // #fff0cf
		'--color-tertiary-200': '255 237 196', // #ffedc4
		'--color-tertiary-300': '255 226 160', // #ffe2a0
		'--color-tertiary-400': '255 204 88', // #ffcc58
		'--color-tertiary-500': '255 182 17', // #ffb611
		'--color-tertiary-600': '230 164 15', // #e6a40f
		'--color-tertiary-700': '191 137 13', // #bf890d
		'--color-tertiary-800': '153 109 10', // #996d0a
		'--color-tertiary-900': '125 89 8', // #7d5908
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #97233f
		'--color-surface-50': '239 222 226', // #efdee2
		'--color-surface-100': '234 211 217', // #ead3d9
		'--color-surface-200': '229 200 207', // #e5c8cf
		'--color-surface-300': '213 167 178', // #d5a7b2
		'--color-surface-400': '182 101 121', // #b66579
		'--color-surface-500': '151 35 63', // #97233f
		'--color-surface-600': '136 32 57', // #882039
		'--color-surface-700': '113 26 47', // #711a2f
		'--color-surface-800': '91 21 38', // #5b1526
		'--color-surface-900': '74 17 31' // #4a111f
	}
};

export const rams: CustomThemeConfig = {
	name: 'Rams',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #013594
		'--color-primary-50': '217 225 239', // #d9e1ef
		'--color-primary-100': '204 215 234', // #ccd7ea
		'--color-primary-200': '192 205 228', // #c0cde4
		'--color-primary-300': '153 174 212', // #99aed4
		'--color-primary-400': '77 114 180', // #4d72b4
		'--color-primary-500': '1 53 148', // #013594
		'--color-primary-600': '1 48 133', // #013085
		'--color-primary-700': '1 40 111', // #01286f
		'--color-primary-800': '1 32 89', // #012059
		'--color-primary-900': '0 26 73', // #001a49
		// secondary | #ffd100
		'--color-secondary-50': '255 248 217', // #fff8d9
		'--color-secondary-100': '255 246 204', // #fff6cc
		'--color-secondary-200': '255 244 191', // #fff4bf
		'--color-secondary-300': '255 237 153', // #ffed99
		'--color-secondary-400': '255 223 77', // #ffdf4d
		'--color-secondary-500': '255 209 0', // #ffd100
		'--color-secondary-600': '230 188 0', // #e6bc00
		'--color-secondary-700': '191 157 0', // #bf9d00
		'--color-secondary-800': '153 125 0', // #997d00
		'--color-secondary-900': '125 102 0', // #7d6600
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #013594
		'--color-surface-50': '217 225 239', // #d9e1ef
		'--color-surface-100': '204 215 234', // #ccd7ea
		'--color-surface-200': '192 205 228', // #c0cde4
		'--color-surface-300': '153 174 212', // #99aed4
		'--color-surface-400': '77 114 180', // #4d72b4
		'--color-surface-500': '1 53 148', // #013594
		'--color-surface-600': '1 48 133', // #013085
		'--color-surface-700': '1 40 111', // #01286f
		'--color-surface-800': '1 32 89', // #012059
		'--color-surface-900': '0 26 73' // #001a49
	}
};

export const niners: CustomThemeConfig = {
	name: '49ers',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #aa0100
		'--color-primary-50': '242 217 217', // #f2d9d9
		'--color-primary-100': '238 204 204', // #eecccc
		'--color-primary-200': '234 192 191', // #eac0bf
		'--color-primary-300': '221 153 153', // #dd9999
		'--color-primary-400': '196 77 77', // #c44d4d
		'--color-primary-500': '170 1 0', // #aa0100
		'--color-primary-600': '153 1 0', // #990100
		'--color-primary-700': '128 1 0', // #800100
		'--color-primary-800': '102 1 0', // #660100
		'--color-primary-900': '83 0 0', // #530000
		// secondary | #b3995d
		'--color-secondary-50': '244 240 231', // #f4f0e7
		'--color-secondary-100': '240 235 223', // #f0ebdf
		'--color-secondary-200': '236 230 215', // #ece6d7
		'--color-secondary-300': '225 214 190', // #e1d6be
		'--color-secondary-400': '202 184 142', // #cab88e
		'--color-secondary-500': '179 153 93', // #b3995d
		'--color-secondary-600': '161 138 84', // #a18a54
		'--color-secondary-700': '134 115 70', // #867346
		'--color-secondary-800': '107 92 56', // #6b5c38
		'--color-secondary-900': '88 75 46', // #584b2e
		// tertiary | #ffffff
		'--color-tertiary-50': '255 255 255', // #ffffff
		'--color-tertiary-100': '255 255 255', // #ffffff
		'--color-tertiary-200': '255 255 255', // #ffffff
		'--color-tertiary-300': '255 255 255', // #ffffff
		'--color-tertiary-400': '255 255 255', // #ffffff
		'--color-tertiary-500': '255 255 255', // #ffffff
		'--color-tertiary-600': '230 230 230', // #e6e6e6
		'--color-tertiary-700': '191 191 191', // #bfbfbf
		'--color-tertiary-800': '153 153 153', // #999999
		'--color-tertiary-900': '125 125 125', // #7d7d7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #aa0100
		'--color-surface-50': '242 217 217', // #f2d9d9
		'--color-surface-100': '238 204 204', // #eecccc
		'--color-surface-200': '234 192 191', // #eac0bf
		'--color-surface-300': '221 153 153', // #dd9999
		'--color-surface-400': '196 77 77', // #c44d4d
		'--color-surface-500': '170 1 0', // #aa0100
		'--color-surface-600': '153 1 0', // #990100
		'--color-surface-700': '128 1 0', // #800100
		'--color-surface-800': '102 1 0', // #660100
		'--color-surface-900': '83 0 0' // #530000
	}
};

export const seahawks: CustomThemeConfig = {
	name: 'Seahawks',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #002244
		'--color-primary-50': '217 222 227', // #d9dee3
		'--color-primary-100': '204 211 218', // #ccd3da
		'--color-primary-200': '191 200 208', // #bfc8d0
		'--color-primary-300': '153 167 180', // #99a7b4
		'--color-primary-400': '77 100 124', // #4d647c
		'--color-primary-500': '0 34 68', // #002244
		'--color-primary-600': '0 31 61', // #001f3d
		'--color-primary-700': '0 26 51', // #001a33
		'--color-primary-800': '0 20 41', // #001429
		'--color-primary-900': '0 17 33', // #001121
		// secondary | #a5acaf
		'--color-secondary-50': '242 243 243', // #f2f3f3
		'--color-secondary-100': '237 238 239', // #edeeef
		'--color-secondary-200': '233 234 235', // #e9eaeb
		'--color-secondary-300': '219 222 223', // #dbdedf
		'--color-secondary-400': '192 197 199', // #c0c5c7
		'--color-secondary-500': '165 172 175', // #a5acaf
		'--color-secondary-600': '149 155 158', // #959b9e
		'--color-secondary-700': '124 129 131', // #7c8183
		'--color-secondary-800': '99 103 105', // #636769
		'--color-secondary-900': '81 84 86', // #515456
		// tertiary | #69be29
		'--color-tertiary-50': '233 245 223', // #e9f5df
		'--color-tertiary-100': '225 242 212', // #e1f2d4
		'--color-tertiary-200': '218 239 202', // #daefca
		'--color-tertiary-300': '195 229 169', // #c3e5a9
		'--color-tertiary-400': '150 210 105', // #96d269
		'--color-tertiary-500': '105 190 41', // #69be29
		'--color-tertiary-600': '95 171 37', // #5fab25
		'--color-tertiary-700': '79 143 31', // #4f8f1f
		'--color-tertiary-800': '63 114 25', // #3f7219
		'--color-tertiary-900': '51 93 20', // #335d14
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #002244
		'--color-surface-50': '217 222 227', // #d9dee3
		'--color-surface-100': '204 211 218', // #ccd3da
		'--color-surface-200': '191 200 208', // #bfc8d0
		'--color-surface-300': '153 167 180', // #99a7b4
		'--color-surface-400': '77 100 124', // #4d647c
		'--color-surface-500': '0 34 68', // #002244
		'--color-surface-600': '0 31 61', // #001f3d
		'--color-surface-700': '0 26 51', // #001a33
		'--color-surface-800': '0 20 41', // #001429
		'--color-surface-900': '0 17 33' // #001121
	}
};
