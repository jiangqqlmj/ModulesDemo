//
//  CalendarManager.m
//  ModulesDemo
//
//  Created by 江清清 on 16/5/22.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
//默认名称
RCT_EXPORT_MODULE()
//对外提供调用方法
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}
@end
