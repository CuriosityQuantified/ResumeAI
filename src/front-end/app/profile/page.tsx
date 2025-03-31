"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CreditCard, User, Bell, Lock, LogOut, Shield, CreditCardIcon, HelpCircle } from "lucide-react"

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    weekly: true,
    promotional: false,
  })

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm text-muted-foreground mb-2">john.doe@example.com</p>
                <Badge className="mb-4">Free Plan</Badge>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </div>

              <div className="mt-6 space-y-1">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive" size="sm">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="(123) 456-7890" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Customize your profile preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                      <option value="America/New_York">Eastern Time (US & Canada)</option>
                      <option value="UTC">UTC</option>
                      <option value="Europe/London">London</option>
                      <option value="Asia/Tokyo">Tokyo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="ja">Japanese</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="browser-notifications">Browser Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                    </div>
                    <Switch
                      id="browser-notifications"
                      checked={notifications.browser}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, browser: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <p className="text-sm text-muted-foreground">Receive a weekly summary of your activity</p>
                    </div>
                    <Switch
                      id="weekly-digest"
                      checked={notifications.weekly}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, weekly: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="promotional">Promotional Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive promotional emails and offers</p>
                    </div>
                    <Switch
                      id="promotional"
                      checked={notifications.promotional}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, promotional: checked })}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Notification Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                  <CardDescription>Manage your subscription and billing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium">Free Plan</h3>
                        <p className="text-sm text-muted-foreground">Basic features with limited usage</p>
                      </div>
                      <Badge>Current Plan</Badge>
                    </div>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Create up to 3 resumes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Basic templates</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Standard AI assistance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4 bg-muted/20">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium">Pro Plan</h3>
                        <p className="text-sm text-muted-foreground">$9.99/month - Advanced features</p>
                      </div>
                      <Button>Upgrade</Button>
                    </div>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Unlimited resumes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Premium templates</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Advanced AI assistance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCardIcon className="h-6 w-6 mr-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">No payment methods added</p>
                          <p className="text-sm text-muted-foreground">Add a payment method to upgrade your plan</p>
                        </div>
                      </div>
                      <Button variant="outline">Add Method</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View your billing history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6 text-muted-foreground">
                    <p>No billing history available</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Protect your account with two-factor authentication
                      </p>
                    </div>
                    <Button variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      Enable
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Activity</CardTitle>
                  <CardDescription>Monitor your account activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Login</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                      <p className="text-sm">Today, 10:30 AM</p>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Password Changed</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                      <p className="text-sm">March 15, 2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Account Created</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                      <p className="text-sm">March 1, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

