export const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width">
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}

		.ie-browser table {
			table-layout: fixed;
		}

		[owa] .img-container div,
		[owa] .img-container button {
			display: block !important;
		}

		[owa] .fullwidth button {
			width: 100% !important;
		}

		[owa] .block-grid .col {
			display: table-cell;
			float: none !important;
			vertical-align: top;
		}

		.ie-browser .block-grid,
		.ie-browser .num12,
		[owa] .num12,
		[owa] .block-grid {
			width: 675px !important;
		}

		.ie-browser .mixed-two-up .num4,
		[owa] .mixed-two-up .num4 {
			width: 224px !important;
		}

		.ie-browser .mixed-two-up .num8,
		[owa] .mixed-two-up .num8 {
			width: 448px !important;
		}

		.ie-browser .block-grid.two-up .col,
		[owa] .block-grid.two-up .col {
			width: 336px !important;
		}

		.ie-browser .block-grid.three-up .col,
		[owa] .block-grid.three-up .col {
			width: 336px !important;
		}

		.ie-browser .block-grid.four-up .col [owa] .block-grid.four-up .col {
			width: 168px !important;
		}

		.ie-browser .block-grid.five-up .col [owa] .block-grid.five-up .col {
			width: 135px !important;
		}

		.ie-browser .block-grid.six-up .col,
		[owa] .block-grid.six-up .col {
			width: 112px !important;
		}

		.ie-browser .block-grid.seven-up .col,
		[owa] .block-grid.seven-up .col {
			width: 96px !important;
		}

		.ie-browser .block-grid.eight-up .col,
		[owa] .block-grid.eight-up .col {
			width: 84px !important;
		}

		.ie-browser .block-grid.nine-up .col,
		[owa] .block-grid.nine-up .col {
			width: 75px !important;
		}

		.ie-browser .block-grid.ten-up .col,
		[owa] .block-grid.ten-up .col {
			width: 60px !important;
		}

		.ie-browser .block-grid.eleven-up .col,
		[owa] .block-grid.eleven-up .col {
			width: 54px !important;
		}

		.ie-browser .block-grid.twelve-up .col,
		[owa] .block-grid.twelve-up .col {
			width: 50px !important;
		}
	</style>
	<style type="text/css" id="media-query">
		@media only screen and (min-width: 695px) {
			.block-grid {
				width: 675px !important;
			}

			.block-grid .col {
				vertical-align: top;
			}

			.block-grid .col.num12 {
				width: 675px !important;
			}

			.block-grid.mixed-two-up .col.num3 {
				width: 168px !important;
			}

			.block-grid.mixed-two-up .col.num4 {
				width: 224px !important;
			}

			.block-grid.mixed-two-up .col.num8 {
				width: 448px !important;
			}

			.block-grid.mixed-two-up .col.num9 {
				width: 504px !important;
			}

			.block-grid.two-up .col {
				width: 337px !important;
			}

			.block-grid.three-up .col {
				width: 225px !important;
			}

			.block-grid.four-up .col {
				width: 168px !important;
			}

			.block-grid.five-up .col {
				width: 135px !important;
			}

			.block-grid.six-up .col {
				width: 112px !important;
			}

			.block-grid.seven-up .col {
				width: 96px !important;
			}

			.block-grid.eight-up .col {
				width: 84px !important;
			}

			.block-grid.nine-up .col {
				width: 75px !important;
			}

			.block-grid.ten-up .col {
				width: 67px !important;
			}

			.block-grid.eleven-up .col {
				width: 61px !important;
			}

			.block-grid.twelve-up .col {
				width: 56px !important;
			}
		}

		@media (max-width: 695px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col>div {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num8 {
				width: 66% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}
		}
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #001232;">
<style type="text/css" id="media-query-bodytag">
@media (max-width: 695px) {
  .block-grid {
    min-width: 320px!important;
    max-width: 100%!important;
    width: 100%!important;
    display: block!important;
  }
  .col {
    min-width: 320px!important;
    max-width: 100%!important;
    width: 100%!important;
    display: block!important;
  }
  .col > div {
    margin: 0 auto;
  }
  img.fullwidth {
    max-width: 100%!important;
    height: auto!important;
  }
  img.fullwidthOnMobile {
    max-width: 100%!important;
    height: auto!important;
  }
  .no-stack .col {
    min-width: 0!important;
    display: table-cell!important;
  }
  .no-stack.two-up .col {
    width: 50%!important;
  }
  .no-stack.mixed-two-up .col.num4 {
    width: 33%!important;
  }
  .no-stack.mixed-two-up .col.num8 {
    width: 66%!important;
  }
  .no-stack.three-up .col.num4 {
    width: 33%!important
  }
  .no-stack.four-up .col.num3 {
    width: 25%!important
  }
}
</style>
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #001232; width: 100%;" cellpadding="0" cellspacing="0" width="100%" bgcolor="#001232" valign="top">
		<tbody>
			<tr style="vertical-align: top;" valign="top">
				<td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
					<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#001232"><![endif]-->
					<div style="background-color:#60E0B3;">
						<div class="block-grid two-up" style="Margin: 0 auto; min-width: 320px; max-width: 675px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#60E0B3;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:675px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="337" style="background-color:transparent;width:337px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:0px;"><![endif]-->
								<div class="col num6" style="min-width: 320px; max-width: 337px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<div class="img-container center fixedwidth" align="center" style="padding-right: 15px;padding-left: 15px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 15px;padding-left: 15px;" align="center"><![endif]-->
												<div style="font-size:1px;line-height:5px"> </div><a href="https://beefree.io" target="_blank"> <img class="center fixedwidth" align="center" border="0" src="img/logo_1.png" alt="Image" title="Image" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; width: 100%; max-width: 338px; display: block;" width="338"></a>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<div class="mobile_hide">
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; border-collapse: collapse;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 20px;" align="center" height="20" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" height="20" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td><td align="center" width="337" style="background-color:transparent;width:337px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:20px;"><![endif]-->
								<div class="col num6" style="min-width: 320px; max-width: 337px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<div class="mobile_hide">
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-collapse: collapse;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 32px;" align="center" height="32" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" height="32" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="mobile_hide">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 15px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
												<div style="color:#FFFFFF;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:150%;padding-top:0px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
													<div style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; line-height: 18px; color: #FFFFFF;">
														<div style="line-height: 18px; font-size: 12px; text-align: center;"><span style="font-size: 18px; line-height: 27px;"><strong><span style="line-height: 27px; font-size: 18px;">ANY DEVICE, ANYWHERE, FAST.</span></strong></span></div>
													</div>
												</div>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#001232;">
						<div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 675px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#001232;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:675px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="675" style="background-color:transparent;width:675px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
								<div class="col num12" style="min-width: 320px; max-width: 675px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; border-collapse: collapse;" valign="top">
															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 10px solid transparent; height: 0px;" align="center" height="0" valign="top">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" height="0" valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 30px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
											<div style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;padding-top:30px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
												<div style="font-size: 12px; line-height: 14px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff;">
													<p style="font-size: 14px; line-height: 33px; text-align: center; margin: 0;"><span style="font-size: 28px;">INTRODUCING</span><strong><span style="font-size: 28px; line-height: 33px;"><br></span><span style="font-size: 80px; line-height: 96px;"><span style="line-height: 96px; font-size: 80px;">HACKISTER3</span></span></strong></p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#001232;">
						<div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 675px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#001232;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:675px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="675" style="background-color:transparent;width:675px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:15px;"><![endif]-->
								<div class="col num12" style="min-width: 320px; max-width: 675px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-collapse: collapse;" valign="top">
															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 10px solid transparent; height: 0px;" align="center" height="0" valign="top">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" height="0" valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											<div class="img-container center fixedwidth" align="center" style="padding-right: 20px;padding-left: 20px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="center"><![endif]-->
												<div style="font-size:1px;line-height:20px"> </div><a href="https://beefree.io" target="_blank"> <img class="center fixedwidth" align="center" border="0" src="img/rocket-bg.png" alt="rocket" title="rocket" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; width: 100%; max-width: 573px; display: block;" width="573"></a>
												<div style="font-size:1px;line-height:20px"> </div>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-image:url('img/clouds1.png');background-position:top left;background-repeat:repeat;background-color:#001232;">
						<div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 675px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('img/clouds1.png');background-position:top left;background-repeat:repeat;background-color:#001232;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:675px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="675" style="background-color:transparent;width:675px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px;"><![endif]-->
								<div class="col num12" style="min-width: 320px; max-width: 675px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
											<div style="color:#60E0B3;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; line-height: 14px; color: #60E0B3;">
													<p style="font-size: 18px; line-height: 40px; text-align: center; margin: 0;"><span style="font-size: 34px;">The <strong>fake</strong> <strong>app</strong> for <br><strong>real-time</strong> collaboration</span></p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 30px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
											<div style="color:#FFFFFF;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:30px;padding-left:10px;">
												<div style="font-size: 12px; line-height: 14px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #FFFFFF;">
													<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;"><span style="font-size: 18px;">Aenean eu leo quam. Pellentesque ornare sem </span></p>
													<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;"><span style="font-size: 18px;">lacinia quam venenatis vestibulum. </span></p>
													<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;"><span style="font-size: 18px;">Donec sed odio dui.</span></p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<div class="button-container" align="center" style="padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 15px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:34.5pt; width:176.25pt; v-text-anchor:middle;" arcsize="55%" stroke="false" fillcolor="#67D6AF"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:18px"><![endif]-->
												<div style="text-decoration:none;display:block;color:#ffffff;background-color:#67D6AF;border-radius:25px;-webkit-border-radius:25px;-moz-border-radius:25px;width:35%; width:calc(35% - 2px);;border-top:1px solid #67D6AF;border-right:1px solid #67D6AF;border-bottom:1px solid #67D6AF;border-left:1px solid #67D6AF;padding-top:5px;padding-bottom:5px;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;">
														<span style="font-size: 16px; line-height: 32px;"><span style="font-size: 16px; line-height: 32px;"><span style="font-size: 18px; line-height: 36px;">SHOW MORE</span></span></span>
													</span></div>
												<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
											</div>
											<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; border-collapse: collapse;" valign="top">
															<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-top: 0px solid transparent; height: 15px;" align="center" height="15" valign="top">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" height="15" valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#FFFFFF;">
						<div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 675px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:675px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="675" style="background-color:transparent;width:675px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px;"><![endif]-->
								<div class="col num12" style="min-width: 320px; max-width: 675px; display: table-cell; vertical-align: top;;">
									<div style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<table class="social_icons" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; border-collapse: collapse;" valign="top">
															<table class="social_table" align="center" to="to" activate="activate" alignment="alignment" cellpadding="0" cellspacing="0" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: undefined; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
																<tbody>
																	<tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top">
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 3px; padding-left: 3px; border-collapse: collapse;" valign="top"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><img width="32" height="32" src="repository_path/img/t-outline-circle-dark-gray/facebook.png" alt="Facebook" title="Facebook" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; display: block;"></a></td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 3px; padding-left: 3px; border-collapse: collapse;" valign="top"><a href="http://twitter.com/" target="_blank" title="Twitter"><img width="32" height="32" src="repository_path/img/t-outline-circle-dark-gray/twitter.png" alt="Twitter" title="Twitter" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; display: block;"></a></td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 3px; padding-left: 3px; border-collapse: collapse;" valign="top"><a href="https://instagram.com/" target="_blank" title="Instagram"><img width="32" height="32" src="repository_path/img/t-outline-circle-dark-gray/instagram@2x.png" alt="Instagram" title="Instagram" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; display: block;"></a></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
											<div style="color:#959595;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:150%;padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div style="font-size: 12px; line-height: 18px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #959595;">
													<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;">Your Company © All rights reserved</p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
</body>

</html>`;
