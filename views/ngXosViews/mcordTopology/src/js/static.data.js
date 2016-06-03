'use strict';

angular.module('xos.mcordTopology')
.constant('TopologyElements', {
  nodes: [
    // {
    //   id: 'fabric1',
    //   type: 'fabric',
    //   name: 'fabric1',
    //   fixed: true,
    //   x: 1,
    //   y: 1
    // },
    // {
    //   id: 'fabric2',
    //   type: 'fabric',
    //   name: 'fabric2',
    //   fixed: true,
    //   x: 1,
    //   y: 2
    // },
    // {
    //   id: 'fabric3',
    //   type: 'fabric',
    //   name: 'fabric3',
    //   fixed: true,
    //   x: 2,
    //   y: 1
    // },
    {
      id: 'fabric4',
      type: 'fabric',
      name: 'fabric4',
      fixed: true,
      x: 1.5,
      y: 1.5
    }
  ],
  links: [
    // {
    //   source: 'fabric1',
    //   target: 'fabric2'
    // },
    // {
    //   source: 'fabric1',
    //   target: 'fabric4'
    // },
    // {
    //   source: 'fabric3',
    //   target: 'fabric4'
    // },
    // {
    //   source: 'fabric3',
    //   target: 'fabric2'
    // }
  ],
  fakedInstance: [
    {
      humanReadableName: 'MME',
      name: 'MME'
    },
    {
      humanReadableName: 'PGW',
      name: 'PGW'
    },
    {
      humanReadableName: 'SGW',
      name: 'SGW'
    },
    {
      humanReadableName: 'Video Server',
      name: 'Video Server'
    }
  ],
  icons: {
    bbu: `M11.08,4.66H24.76l6.81,6.82H4.23Z M4.24,18.34V13.21H31.6v5.13H4.24Zm25.64-1.72V14.94H28.19v1.69h1.68Zm-13.65-1.7v1.69h1.69V14.93H16.22Zm-3.42,0v1.69h1.68V14.93H12.8Zm-3.42,0v1.69h1.68V14.93H9.38ZM6,14.93v1.69H7.64V14.93H6Z M32.8,33.23H3V11.42l0,0c1.17-1.16,2.54-2.5,3.87-3.8S9.59,5,10.72,3.87l0,0H25.08l0,0C26.25,5,27.6,6.32,28.9,7.61s2.68,2.63,3.83,3.78l0,0v0.06ZM3.3,33H32.53l0-21.43C31.36,10.39,30,9.07,28.71,7.8S26.09,5.22,25,4.1H10.86C9.75,5.21,8.41,6.52,7.12,7.77s-2.67,2.61-3.83,3.76V33Z M4.24,25.18V20.05H31.6v5.13H4.24Zm24-1.73h1.68V21.78H28.19v1.67Zm-12,0H17.9V21.78H16.21v1.68Zm-1.73-1.68H12.81v1.67h1.68V21.78Zm-3.43,1.68V21.78H9.38v1.69h1.68ZM6,23.46H7.64V21.78H6v1.68Z M31.6,26.89V32H4.24V26.89H31.6Zm-3.4,1.72V30.3h1.68V28.61H28.19Zm-10.28,0H16.22V30.3h1.68V28.62Zm-3.43,1.69V28.62H12.8v1.69h1.68Zm-3.42,0V28.62H9.38v1.69h1.68ZM7.65,28.62H6v1.67H7.65V28.62Z`,
    // bbu: `M15,100a5,5,0,0,1-5-5v-65a5,5,0,0,1,5-5h80a5,5,0,0,1,5,5v65a5,5,0,0,1-5,5zM14,22.5l11-11a10,3,0,0,1,10-2h40a10,3,0,0,1,10,2l11,11zM16,35a5,5,0,0,1,10,0a5,5,0,0,1-10,0z`,
    switch: `M10,20a10,10,0,0,1,10-10h70a10,10,0,0,1,10,10v70a10,10,
            0,0,1-10,10h-70a10,10,0,0,1-10-10zM60,26l12,0,0-8,18,13-18,13,0
            -8-12,0zM60,60l12,0,0-8,18,13-18,13,0-8-12,0zM50,40l-12,0,0-8
            -18,13,18,13,0-8,12,0zM50,74l-12,0,0-8-18,13,18,13,0-8,12,0z`,
    // rru: `M85,71.2c-8.9,10.5-29.6,8.7-45.3-3.5C23.9,55.4,19.8,37,28.6,26.5C29.9,38.6,71.5,69.9,85,71.2z M92.7,76.2M16.2,15 M69.5,100.7v-4c0-1.4-1.2-2.2-2.6-2.2H19.3c-1.4,0-2.8,0.7-2.8,2.2v3.9c0,0.7,0.8,1,1.5,1h50.3C69,101.5,69.5,101.3,69.5,100.7z M77.3,7.5l0,3.7c9,0.1,16.3,7.1,16.2,15.7l3.9,0C97.5,16.3,88.5,7.6,77.3,7.5z M77.6,14.7l0,2.5c5.3,0,9.7,4.2,9.6,9.3l2.6,0C89.9,20,84.4,14.7,77.6,14.7z M82.3,22.2c-1.3-1.2-2.9-1.9-4.7-1.9l0,1.2c1.4,0,2.8,0.6,3.8,1.5c1,1,1.6,2.3,1.6,3.7l1.3,0C84.3,25.1,83.6,23.4,82.3,22.2z M38.9,69.5l-5.1,23h16.5l-2.5-17.2C44.1,73.3,38.9,69.5,38.9,69.5zM58.1,54.1c13.7,10.1,26.5,16.8,29.2,13.7c2.7-3.1-5.6-13-19.3-24.4 M62.9,34.2 M62,37.9C47.7,27.3,33.7,20,31,23.1c-2.7,3.2,7,14.2,20.6,26 M73.9,25.7c-2.9,0.1-5.2,2.3-5.1,4.8c0,0.7,0.2,1.4,0.6,2l0,0L53.8,49.7l3.3,2.5L72.7,35l-0.4-0.3c0.6,0.2,1.3,0.3,1.9,0.3c2.9-0.1,5.2-2.3,5.1-4.9C79.3,27.6,76.8,25.6,73.9,25.7z`,
    rru: `M18.11,11a2.25,2.25,0,0,1,2.13,1.53A2.2,2.2,0,0,1,19.52,15a0.74,0.74,0,0,0-.3.61A7.49,7.49,0,0,0,20,19.35c2,4.55,3.94,9.13,5.89,13.7a1.14,1.14,0,0,1-.59,1.64A1.11,1.11,0,0,1,23.86,34q-0.53-1.2-1-2.41a0.38,0.38,0,0,0-.41-0.28H13.78a0.36,0.36,0,0,0-.39.26q-0.51,1.24-1.06,2.47a1.11,1.11,0,0,1-1.14.67,1.07,1.07,0,0,1-1-.89,1.47,1.47,0,0,1,.1-0.75q2.84-6.66,5.7-13.32a4.06,4.06,0,0,1,.18-0.42A6.39,6.39,0,0,0,17,15.53,0.58,0.58,0,0,0,16.74,15,2.21,2.21,0,0,1,16,12.5,2.26,2.26,0,0,1,18.11,11ZM21.74,29.1c-0.32-.74-0.61-1.43-0.92-2.12a0.35,0.35,0,0,0-.27-0.14H15.66a0.33,0.33,0,0,0-.26.11c-0.32.7-.62,1.41-0.93,2.15h7.26Zm-5.31-4.55h3.37L18.1,20.63Z M2.23,13.56A16,16,0,0,1,6.76,2.16a1.68,1.68,0,0,1,.8-0.46,1.06,1.06,0,0,1,1.18.59,1.16,1.16,0,0,1-.23,1.37A14.48,14.48,0,0,0,6.19,6.77a13.57,13.57,0,0,0,1.9,15.59l0.46,0.49a1.16,1.16,0,1,1-1.68,1.59,15.6,15.6,0,0,1-4.41-8.64C2.32,14.95,2.28,14.07,2.23,13.56Z M34,13.84a15.51,15.51,0,0,1-4.54,10.52,1.19,1.19,0,0,1-1.65.18,1.17,1.17,0,0,1,0-1.77,13.81,13.81,0,0,0,2.79-4.1,13.6,13.6,0,0,0-2.7-14.91A1.8,1.8,0,0,1,27.41,3,1.08,1.08,0,0,1,28,1.8,1.15,1.15,0,0,1,29.38,2a15.59,15.59,0,0,1,2.51,3.28A16.47,16.47,0,0,1,34,13.84Z M10.93,21.6A1.33,1.33,0,0,1,9.87,21a11.06,11.06,0,0,1-2.8-5.27A11.22,11.22,0,0,1,9.8,5.51l0.27-.28a1.16,1.16,0,1,1,1.64,1.63,8.62,8.62,0,0,0-2.06,3.22A8.87,8.87,0,0,0,11.18,19c0.18,0.23.4,0.44,0.59,0.66A1.13,1.13,0,0,1,11.95,21,1.08,1.08,0,0,1,10.93,21.6Z M29.47,13.57a11.11,11.11,0,0,1-3.27,7.64,1.18,1.18,0,0,1-1.51.21,1.13,1.13,0,0,1-.43-1.4,2.06,2.06,0,0,1,.39-0.54,8.85,8.85,0,0,0,2.49-5.89A9,9,0,0,0,24.64,7a1.85,1.85,0,0,1-.44-0.85A1,1,0,0,1,24.82,5a1.07,1.07,0,0,1,1.3.21,20.11,20.11,0,0,1,1.79,2.31A11.09,11.09,0,0,1,29.47,13.57Z M11.3,13.18a6.73,6.73,0,0,1,2-4.73,1.15,1.15,0,0,1,1.45-.2,1.12,1.12,0,0,1,.49,1.32,1.58,1.58,0,0,1-.33.53,4.49,4.49,0,0,0,0,6.26,1.16,1.16,0,1,1-1.7,1.57A6.81,6.81,0,0,1,11.3,13.18Z M24.94,13.14A6.9,6.9,0,0,1,23,18a1.16,1.16,0,1,1-1.7-1.58,4.5,4.5,0,0,0,0-6.29A1.16,1.16,0,1,1,23,8.5,6.75,6.75,0,0,1,24.94,13.14Z`
  }
})